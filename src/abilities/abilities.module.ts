import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ability } from './ability.entity';
import { AbilitiesService } from './abilities.service';
import { AbilitiesController } from './abilities.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ability])],
  providers: [AbilitiesService],
  controllers: [AbilitiesController]
})
export class AbilitiesModule {}
