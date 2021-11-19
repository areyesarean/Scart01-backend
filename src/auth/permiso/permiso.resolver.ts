import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermisoService } from './permiso.service';
import { Permiso } from './entities/permiso.entity';
import { CreatePermisoInput } from './dto/create-permiso.input';
import { UpdatePermisoInput } from './dto/update-permiso.input';

@Resolver(() => Permiso)
export class PermisoResolver {
  constructor(private readonly permisoService: PermisoService) {}

  @Mutation(() => Permiso)
  createPermiso(
    @Args('createPermisoInput') createPermisoInput: CreatePermisoInput
  ) {
    return this.permisoService.create(createPermisoInput);
  }

  @Query(() => [Permiso], { name: 'permisos' })
  findAll() {
    return this.permisoService.findAll();
  }

  @Query(() => Permiso, { name: 'permiso' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.permisoService.findOne(id);
  }

  @Mutation(() => Permiso)
  updatePermiso(
    @Args('updatePermisoInput') updatePermisoInput: UpdatePermisoInput
  ) {
    return this.permisoService.update(
      updatePermisoInput.id,
      updatePermisoInput
    );
  }

  @Mutation(() => Permiso)
  removePermiso(@Args('id', { type: () => String }) id: string) {
    return this.permisoService.remove(id);
  }
}
