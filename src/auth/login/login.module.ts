import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [LoginResolver, LoginService],
})
export class LoginModule {}
