import { Test, TestingModule } from '@nestjs/testing';
import { LoginResolver } from './login.resolver';
import { LoginService } from './login.service';

describe('LoginResolver', () => {
  let resolver: LoginResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginResolver, LoginService],
    }).compile();

    resolver = module.get<LoginResolver>(LoginResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
