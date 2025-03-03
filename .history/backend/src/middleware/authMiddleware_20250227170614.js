import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js"

export const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ message: "Unothorized-no token Provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({ message: "Unothorized- Invalid token" })


        }
        const user = await User.findById(decoded.userId).select("-password")
        if (!user) {

        }

    } catch (error) {

    }
}