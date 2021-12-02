import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginInput } from './dto/create-login.input';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './entities/refresh-token.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private readonly _userRepo: Repository<User>,
    private readonly _jwtService: JwtService
  ) {}

  async login({ username, password }: LoginInput): Promise<RefreshToken> {
    const user = await this._userRepo.findOne({
      where: { username, active: true, verified: true },
    });
    if (!user) throw new NotFoundException('Usuario o contraseña incorrectos');
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new NotFoundException('Usuario o contraseña incorrectos');

    return { token: await this.createToken(user) };
  }

  async createToken({ password, rol, active, verified, ...payload }: User) {
    const token = await this._jwtService.signAsync(payload);
    return token;
  }
}
