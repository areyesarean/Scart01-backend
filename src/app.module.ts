import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './database/typeorm.config';
import * as path from 'path';
import { graphqlProviders } from './graphql/graphql.provider';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, `../env/development.env`),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfig),
    AuthModule,
    //GraphQLModule.forRootAsync(graphqlProviders),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
