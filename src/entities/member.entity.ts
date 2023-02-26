import {Column, PrimaryGeneratedColumn, CreateDateColumn, Entity} from "typeorm";

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
}