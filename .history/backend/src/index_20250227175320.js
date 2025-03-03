import express, { json } from "express"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

import dotenv from "dotenv"
import { connectDb } from "./libs/db.js"

import cookieParse from "cookie-parser"
dotenv.config()
const app = express()
app.use(express.json())

app.use(cookieParse())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`server running on port ${port} `)
    connectDb()
})