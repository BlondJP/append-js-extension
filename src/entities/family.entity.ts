import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Member} from "./member.entity";

@Entity()
export class Family {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToMany(() => Member)
    categories: Member[]
}