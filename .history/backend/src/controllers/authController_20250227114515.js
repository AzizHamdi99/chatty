import express from 'express'
import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt'
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
        const salt = bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            name,
            email,
            password: hashedpassword
        })
        if (newUser) {

        }
        else {

        }

    } catch (error) {

    }



}

export const signin = async (req, res) => {


}

export const logout = async (req, res) => {


}
