import express from 'express'
import { User } from '../models/userModel.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 charaters" })
        }
        const user = await User.findOne({ email })



    } catch (error) {

    }



}

export const signin = async (req, res) => {


}

export const logout = async (req, res) => {


}
