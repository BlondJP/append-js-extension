import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {List} from "./list.entity";

@Entity()
export class Present {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    imageUrl!: string;

    @Column()
    price!: number;

    @Column()
    listId: number;

    @ManyToOne(() => List, (list) => list.presents)
    list: List
}