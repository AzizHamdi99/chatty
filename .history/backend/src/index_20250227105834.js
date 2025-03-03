import express from "express"

const app = express()
app.use("/api/")


app.listen(5001, () => {
    console.log("server running on port 5001")
})