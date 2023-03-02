import { ConnectionSingleton } from "../repositories/connection-singleton.js";
import { Present } from "../entities/present.entity.js";
export const presents = [];
export async function createPresentService(input) {
    const presentRepository = (await ConnectionSingleton.getInstance()).getRepository(Present);
    const present = new Present();
    present.title = input.title;
    present.description = input.description;
    present.imageUrl = input.imageUrl;
    present.price = input.price;
    present.listId = input.listId;
    await presentRepository.save(present);
    return present;
}
