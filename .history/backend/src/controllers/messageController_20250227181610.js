import Message from "../models/messageModel.js"
import { User } from "../models/userModel.js"

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggerdInUser = req.user._id
        const filtredUsers = await User.find({ _id: { $ne: loggerdInUser } }).select("-password")

        res.staus(200).json(filtredUsers)



    } catch (error) {
        console.log("Error in getUsersForSidebar", error.message)
        res.status(500).json({ error: "internal server error" })

    }

}

export const getMessages = async () => {
    try {

        const { id: userToChatId } = req.params

        const senderId = req.user._id
        const messages = await Message.find({
            $or: [
                { senderId }

            ]
        })

    } catch (error) {

    }

}