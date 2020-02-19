import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Hero } from './hero.entity';
import { HeroesService } from './heroes.service';

@Crud({
	model: {
		type: Hero
	},

	query: {
		join: {
		  abilities: {
			eager: true
		  }
		}
	  }	
})
@Controller('heroes')
export class HeroesController {
	constructor(public service: HeroesService) { }
}