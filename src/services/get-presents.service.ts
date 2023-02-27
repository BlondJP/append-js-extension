import {CreatePresentInput} from "./create-present.service";
import {ConnectionSingleton} from "../repositories/connection-singleton";
import {Present} from "../entities/present.entity";

export async function getPresentsService(): Promise<Present[]> {
    const connection = await ConnectionSingleton.getInstance()
    return connection.getRepository(Present).find()
}