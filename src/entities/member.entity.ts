import {Column, PrimaryGeneratedColumn, CreateDateColumn, Entity, ManyToMany} from "typeorm";
import {Family} from "./family.entity";
import {JoinTable} from 'typeorm';


@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    fullName!: string;

    @Column()
    nickName!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    password!: string;

    @CreateDateColumn({nullable: true})
    registrationDate!: string;

    @ManyToMany(() => Family)
    @JoinTable()
    categories: Family[]
}