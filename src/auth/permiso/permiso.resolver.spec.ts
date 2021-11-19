import { Test, TestingModule } from '@nestjs/testing';
import { PermisoResolver } from './permiso.resolver';
import { PermisoService } from './permiso.service';

describe('PermisoResolver', () => {
  let resolver: PermisoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermisoResolver, PermisoService],
    }).compile();

    resolver = module.get<PermisoResolver>(PermisoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
