import express, { json } from "express"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import { connectDb } from "./libs/db.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use("/api/auth", authRoutes)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`server running on port ${port} `)
    connectDb()
})