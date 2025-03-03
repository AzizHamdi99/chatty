import express from "express"
import authRoutes from "./routes/authRoutes.js"

const app = express()
app.use("/api/auth", authRoutes)


app.listen(5001, () => {
    console.log("server running on port 5001")
})