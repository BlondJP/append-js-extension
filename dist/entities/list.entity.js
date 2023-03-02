var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Present } from "./present.entity.js";
import { Member } from "./member.entity.js";
let List = class List {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], List.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], List.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", Date)
], List.prototype, "endingDate", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], List.prototype, "imageUrl", void 0);
__decorate([
    OneToMany(() => Present, (present) => present.list),
    __metadata("design:type", Array)
], List.prototype, "presents", void 0);
__decorate([
    ManyToOne(() => Member, (member) => member.lists),
    __metadata("design:type", Member)
], List.prototype, "member", void 0);
List = __decorate([
    Entity()
], List);
export { List };
