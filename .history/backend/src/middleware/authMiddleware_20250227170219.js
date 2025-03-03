import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js"

export const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ message: "Unothorized-no token Provided" })
        }
        const decoded


    } catch (error) {

    }
}