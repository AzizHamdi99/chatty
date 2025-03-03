import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(

    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        }

    })