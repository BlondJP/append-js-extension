export interface CreatePresentInput {
    title: string
    imageUrl: string
    price: number
    description: string
}

export const presents: CreatePresentInput[] = []

export function createPresentService(input: CreatePresentInput) {
    presents.push(input)

    return input
}