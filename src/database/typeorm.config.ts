/* eslint-disable prettier/prettier */
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';


export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: (_configService: ConfigService) => ({
    type: 'postgres',
    host: _configService.get<string>('DATABASE_HOST'),
    port: parseInt(_configService.get<string>('DATABASE_PORT')),
    username: _configService.get<string>('DATABASE_USER'),
    password: _configService.get<string>('DATABASE_PASSWORD'),
    database: _configService.get<string>('DATABASE'),
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
    retryAttempts: 3,
    retryDelay: 3000
  })
};
