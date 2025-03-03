import express from "express"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cors from 'cors'
import bodyParser from "body-parser"

import dotenv from "dotenv"
import { connectDb } from "./libs/db.js"

import cookieParse from "cookie-parser"
import path from "path"
import { app, server } from "./libs/socket.js"
dotenv.config()
const __dirame

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
app.use("/api/messages", messageRoutes)


const port = process.env.PORT


server.listen(port, () => {
    console.log(`server running on port ${port} `)
    connectDb()
})