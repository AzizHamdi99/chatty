import cloudinary from "../libs/cloudinary.js"
import { getReceiverSocketId } from "../libs/socket.js"
import Message from "../models/messageModel.js"
import { User } from "../models/userModel.js"

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggerdInUser = req.user._id
        const filtredUsers = await User.find({ _id: { $ne: loggerdInUser } }).select("-password")

        res.status(200).json(filtredUsers)



    } catch (error) {
        console.log("Error in getUsersForSidebar", error.message)
        res.status(500).json({ error: "internal server error" })

    }

}

export const getMessages = async (req, res) => {
    try {

        const { id } = req.params

        const myId = req.user._id
        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: id },
                { senderId: id, receiverId: myId }

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
        const { id } = req.params

        const senderId = req.user._id

        let imageUrl
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url

        }
        const newMessage = new Message({
            senderId: senderId,
            receiverId: id,
            text: text,
            image: imageUrl
        })
        await newMessage.save()

        const receiverSocketId = getReceiverSocketId(id)
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)



    } catch (error) {
        console.log("error in sendMessage controller", error.message)
        res.status(500).json({ message: 'internal server error ' })

    }

}