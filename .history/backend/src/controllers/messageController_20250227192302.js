import cloudinary from "../libs/cloudinary.js"
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

        const myId = req.user._id
        const messages = await Message.find({
            $or: [
                { myId: myId, receiverId: userToChatId },
                { myId: userToChatId, receiverId: myId }

            ]
        })
        res.status(200).json(messages)

    } catch (error) {
        console.log("error in getmessages controller", error.message)
        res.status(500).json({ message: 'internal server error ' })

    }

}

export const sendMessage = async (req, res) => {

    try {
        const { text, image } = req.body
        const { id: userToChatId } = req.params

        const senderId = req.user._id

        let imageUrl
        if (imageUrl) {
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url

        }
        const newMessage = new Message({
            senderId,
            receiverId, text,
            image: imageUrl
        })
        await newMessage.save()
        res.status(201)


    } catch (error) {

    }

}