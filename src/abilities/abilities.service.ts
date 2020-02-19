import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Ability } from './ability.entity';

@Injectable()
export class AbilitiesService extends TypeOrmCrudService<Ability> {
  constructor(@InjectRepository(Ability) repoAbility) {
    super(repoAbility);
  }
}