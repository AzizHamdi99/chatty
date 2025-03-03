import express from 'express'
import { User } from '../models/userModel.js'
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 charaters" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "invalide information" })
        }
        const salt = bcrypt.




    } catch (error) {

    }



}

export const signin = async (req, res) => {


}

export const logout = async (req, res) => {


}
