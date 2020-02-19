import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
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

	@ManyToMany(type => Ability, {
		cascade: true,
        eager: true
	})
	@JoinTable()
	abilities: Ability[];

}