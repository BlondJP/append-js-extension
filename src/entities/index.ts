import {List} from "./list.entity";
import {Member} from "./member.entity";
import {Family} from "./family.entity";
import {Present} from "./present.entity";

export function getEntities() {
    return [List, Member, Present, Family, ]
}