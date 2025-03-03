import express from "express"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"

const app = express()
app.use("/api/auth", authRoutes)

dotenv.config()
const port = process.env.PORT

app.listen(port, () => {
    console.log("server running on port " + port)
})