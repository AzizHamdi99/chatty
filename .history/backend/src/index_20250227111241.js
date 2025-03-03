import express from "express"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"

const app = express()
app.use("/api/auth", authRoutes)
dotenv.config()


app.listen(5001, () => {
    console.log("server running on port 5001")
})