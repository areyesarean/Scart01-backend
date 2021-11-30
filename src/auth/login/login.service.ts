import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginInput } from './dto/create-login.input';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private readonly _userRepo: Repository<User>
  ) {}

  async login({ username, password }: LoginInput): Promise<User> {
    const user = await this._userRepo.findOne({ where: { username } });
    if (!user) throw new NotFoundException('Usuario o contraseña incorrectos');
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new NotFoundException('Usuario o contraseña incorrectos');
    return user;
  }
}
