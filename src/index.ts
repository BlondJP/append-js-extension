import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome in the family')
})

app.listen(port, () => {
    console.log(`Family presents server running on port ${port} ...`)
})