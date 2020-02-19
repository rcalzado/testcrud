import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ability {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}