import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RefreshTokenInput } from './dto/create-refresh-token.input';
import { RefreshToken } from './entities/refresh-token.entity';
import { RefreshTokenService } from './refresh-token.service';

@Resolver()
export class RefreshTokenResolver {
  constructor(private readonly _refreshTokenService: RefreshTokenService) {}

  @Mutation(() => RefreshToken, {
    description: 'Recibe un token caducado y retorna uno nuevo',
  })
  refreshToken(
    @Args('refreshTokenInput') refreshTokenInput: RefreshTokenInput
  ) {
    return this._refreshTokenService.refreshToken(refreshTokenInput);
  }
}
