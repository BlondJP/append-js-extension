import { EntityRepository, Repository } from "typeorm";
import {Family} from "../entities/family";

@EntityRepository(Family)
export class FamilyRepository extends Repository<Family> {
    findByName(name: string): Promise<Family[]> {
        return this.createQueryBuilder("family")
            .where("family.name = :name", { name })
            .getMany();
    }

    updateName(id: number, name: string) {
        return this.createQueryBuilder("family")
            .update()
            .set({ name: name })
            .where("family.id = :id", { id })
            .execute();
    }
}