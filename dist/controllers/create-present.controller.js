import { createPresentService } from "../services/create-present.service.js";
export async function createPresentController(req, res) {
    console.log({ body: req.body });
    const input = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        listId: req.body.listId
    };
    const present = await createPresentService(input);
    return res.send({ present });
}
