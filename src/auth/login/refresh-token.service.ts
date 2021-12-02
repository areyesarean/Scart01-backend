import { ConflictException, Injectable } from '@nestjs/common';
import { RefreshTokenInput } from './dto/create-refresh-token.input';
import { RefreshToken } from './entities/refresh-token.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshTokenService {
  constructor(private readonly _jwtService: JwtService) {}

  async refreshToken(refreshToken: RefreshTokenInput): Promise<RefreshToken> {
    const payload = this._jwtService.decode(refreshToken.token);
    const payloadok = {
      id: payload['id'],
      username: payload['username'],
      firstName: payload['firstName'],
      lastName: payload['lastName'],
      email: payload['email'],
    };
    try {
      await this._jwtService.verifyAsync(refreshToken.token);
      const tokenRefresh = await this._jwtService.signAsync(payloadok);
      return { token: tokenRefresh };
    } catch (error) {
      if (error['message'] === 'jwt expired') {
        const tokenRefresh = await this._jwtService.signAsync(payloadok);
        return { token: tokenRefresh };
      } else {
        throw new ConflictException('Token invalido');
      }
    }
  }
}
