import {Request, Response} from 'express';
import {CreatePresentInput, createPresentService} from "../services/create-present.service";

export async function createPresentController(req: Request, res: Response) {
    console.log({body: req.body})
    const input: CreatePresentInput = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
    }

    const present = await createPresentService(input)

    return res.send({present})
}