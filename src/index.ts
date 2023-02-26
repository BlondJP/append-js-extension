import express from "express"
import bodyParser from "body-parser"

import {createPresentController} from "./controllers/create-present.controller";
import {getPresentsController} from "./controllers/get-presents.controller";
const app = express()
const port = 3000


// midlewwares
app.use(express.json());

const PRESENT_RESOURCE = "/presents"

app.get(PRESENT_RESOURCE, getPresentsController)

app.post(PRESENT_RESOURCE, createPresentController)

app.listen(port, () => {
    console.log(`Family presents server running on port ${port} ...`)
})