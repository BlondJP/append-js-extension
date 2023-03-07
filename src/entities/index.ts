import {Entity} from "typeorm";

import {Member} from "./member.entity";
import {List} from "./list.entity";
import {Family} from "./family.entity";
import {Present} from "./present.entity";

export function getEntities() {
    return [Member, List, Family, Present]
}