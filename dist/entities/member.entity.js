var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, PrimaryGeneratedColumn, CreateDateColumn, Entity, ManyToMany, OneToMany } from "typeorm";
import { Family } from "./family.entity.js";
import { JoinTable } from 'typeorm';
import { List } from "./list.entity.js";
let Member = class Member {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Member.prototype, "fullName", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Member.prototype, "nickName", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], Member.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Member.prototype, "password", void 0);
__decorate([
    CreateDateColumn({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "registrationDate", void 0);
__decorate([
    ManyToMany(() => Family),
    JoinTable(),
    __metadata("design:type", Array)
], Member.prototype, "families", void 0);
__decorate([
    OneToMany(() => List, (list) => list.member),
    JoinTable(),
    __metadata("design:type", Array)
], Member.prototype, "lists", void 0);
Member = __decorate([
    Entity()
], Member);
export { Member };
