import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LoginService } from './login.service';
import { Login } from './entities/login.entity';
import { LoginInput } from './dto/create-login.input';

@Resolver(() => Login)
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Mutation(() => Login)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.loginService.login(loginInput);
  }
}
