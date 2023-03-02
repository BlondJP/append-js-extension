var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { EntityRepository, Repository } from "typeorm";
import { Family } from "../entities/family.entity.js";
let FamilyRepository = class FamilyRepository extends Repository {
    findByName(name) {
        return this.createQueryBuilder("family")
            .where("family.name = :name", { name })
            .getMany();
    }
    updateName(id, name) {
        return this.createQueryBuilder("family")
            .update()
            .set({ name: name })
            .where("family.id = :id", { id })
            .execute();
    }
};
FamilyRepository = __decorate([
    EntityRepository(Family)
], FamilyRepository);
export { FamilyRepository };
