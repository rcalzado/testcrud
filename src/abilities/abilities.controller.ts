import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Ability } from './ability.entity';
import { AbilitiesService } from './abilities.service';

@Crud({
	model: {
		type: Ability
	}
})
@Controller('abilities')
export class AbilitiesController {
	constructor(public service: AbilitiesService) { }
}