import {ConnectionSingleton} from "../repositories/connection-singleton";
import {Present} from "../entities/present.entity";

export interface CreatePresentInput {
    title: string
    imageUrl: string
    price: number
    description: string
}

export const presents: CreatePresentInput[] = []

export async function createPresentService(input: CreatePresentInput) {
    const presentRepository = (await ConnectionSingleton.getInstance()).getRepository(Present)

    const present = new Present()
    present.title = input.title
    present.description = input.description
    present.imageUrl = input.imageUrl
    present.price = input.price
    await presentRepository.save(present)

    return present
}