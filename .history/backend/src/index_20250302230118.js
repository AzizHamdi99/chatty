import express from "express"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cors from 'cors'
import bodyParser from "body-parser"

import dotenv from "dotenv"
import { connectDb } from "./libs/db.js"

import cookieParse from "cookie-parser"
dotenv.config()
const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
))

app.use(cookieParse())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`server running on port ${port} `)
    connectDb()
})