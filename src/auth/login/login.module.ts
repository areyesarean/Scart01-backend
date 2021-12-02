import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtStrategy } from '../strategies/jwt.strategies';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RefreshTokenResolver } from './refresh-token.resolver';
import { RefreshTokenService } from './refresh-token.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: 1200,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    LoginResolver,
    LoginService,
    RefreshTokenResolver,
    RefreshTokenService,
    JwtStrategy,
  ],
})
export class LoginModule {}
