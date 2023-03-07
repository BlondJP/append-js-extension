import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Present} from "./present.entity";

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(() => Present, (present) => present.list)
    presents: Present[]
}