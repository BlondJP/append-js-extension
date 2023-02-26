import {getPresentsService} from "../services/get-presents.service";

export function getPresentsController(req, res) {
    console.log("in get presenets controller")
    const presents =  getPresentsService()
    return res.send({presents})
}
