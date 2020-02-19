import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsOptional, IsDefined, IsString, IsNumber } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Ability } from '../abilities/ability.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Hero {
	@IsOptional({ always: true })
	@PrimaryGeneratedColumn()
	id: number;

	@IsOptional({ groups: [UPDATE] })
	@IsDefined({ groups: [CREATE] })
	@IsString({ always: true })
	@Column()
	name: string;

	@IsOptional({ groups: [UPDATE] })
	@IsDefined({ groups: [CREATE] })
	@IsNumber({}, { always: true })
	@Column()
	power: number;

	@OneToMany(type => Ability, ability => ability.hero, {
		cascade: true,
        eager: true
	})
	abilities: Ability[];

}