/* eslint-disable prettier/prettier */
import { ConfigService, ConfigModule } from '@nestjs/config';
import { GqlModuleAsyncOptions } from '@nestjs/graphql';

export const graphqlProviders: GqlModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    autoSchemaFile: true,
    playground: false,
    // cors: configService.get<string>('CORS_ORIGIN'),
    cors: '*',
    context: ({ req }) => ({ headers: req.headers }),
  }),
  inject: [ConfigService],
};
