import { Module } from '@nestjs/common';
import { PermisoModule } from './permiso/permiso.module';
import { RolModule } from './rol/rol.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    PermisoModule,
    RolModule,
    UserModule,
    LoginModule,
    //RefreshTokenModule,
  ],
})
export class AuthModule {}
