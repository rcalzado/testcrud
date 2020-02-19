import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Hero } from '../heroes/hero.entity';

@Entity()
export class Ability {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(type => Hero, hero => hero.abilities)
    hero: Hero;

}