/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../rol/entities/rol.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserInterface } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { ChangePasswordInput } from './dto/change-pass-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly _userRepo: Repository<User>,
    @InjectRepository(Rol) private readonly _rolRepo: Repository<Rol>
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this._userRepo.create(createUserInput);

    await bcrypt.hash(user.password, 10).then(function (hash: string) {
      user.password = hash;
    });

    user.rol = await this._rolRepo.findOne(createUserInput.rolId);
    return this._userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this._userRepo.find();
  }

  async findOne(id: string): Promise<UserInterface> {
    const user = await this._userRepo.findOne(id);
    if (!user) throw new NotFoundException('No existe ese usuario');
    return user;
  }

  async findByEmail(email: string): Promise<UserInterface> {
    const user = await this._userRepo.findOne({
      where: { email },
    });
    if (!user)
      throw new NotFoundException('No existe un usuario con ese email');
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this._userRepo.findOne(id);
    if (!user) throw new NotFoundException('No existe ese usuario');
    const { password, ...newUser } = this._userRepo.merge(
      user,
      updateUserInput
    );
    const roles = await this._rolRepo.findOne(updateUserInput.rolId);
    if (!roles) throw new NotFoundException('No existe ese rol');
    newUser.rol = roles;
    return await this._userRepo.save(newUser);
  }

  async remove(id: string): Promise<UserInterface> {
    const { password, ...user } = await this._userRepo.findOne(id);
    if (!user) throw new NotFoundException('No existe ese usuario');
    this._userRepo.delete(id);
    return user;
  }

  async changePassword({
    username,
    passwordNew,
    passwordOld,
  }: ChangePasswordInput) {
    const user = await this._userRepo.findOne({
      where: { username },
    });
    if (!user) throw new NotFoundException('No existe ese usuario');

    const match = await bcrypt.compare(passwordOld, user.password);
    if (!match) throw new NotFoundException('Contraseña incorrecta');

    await bcrypt.hash(passwordNew, 10).then(function (hash: string) {
      user.password = hash;
    });
    return await this._userRepo.save(user);
  }
}
