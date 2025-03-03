import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        await mongoose.connect()
    } catch (error) {

    }
}