import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Rol } from '../rol/entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rol])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
