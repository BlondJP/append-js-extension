import {getPresentsService} from "../services/get-presents.service";

export async function getPresentsController(req, res) {
    console.log("in get presenets controller")
    const presents = await getPresentsService()
    return res.send({presents})
}
