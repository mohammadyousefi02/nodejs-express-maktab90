import express from "express"
import router from "./routes/index.js"
import { connectToDb } from "./util/connectToDb.js"

const app = express()

app.use(express.json())

connectToDb()

app.use('/api/v1', router)


app.listen(1999)