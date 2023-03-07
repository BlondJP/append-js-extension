import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Present} from "./present.entity";

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    // write it with string to avoid circular dependencies
    @OneToMany("Present", "list")
    presents: Present[]
}