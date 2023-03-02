import { ConnectionSingleton } from "../repositories/connection-singleton.js";
import { Present } from "../entities/present.entity.js";
export async function getPresentsService() {
    const connection = await ConnectionSingleton.getInstance();
    return connection.getRepository(Present).find();
}
