import express from 'express'
import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { generateToken } from '../libs/utils.js'
export const signup = async (req, res) => {
    const { fullname, email, password } = req.body
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
            fullname,
            email,
            password: hashedpassword
        })
        if (newUser) {
            generateToken(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullname: new User.fullname,
                email: new User.email,
                profilPic: newUser

            })


        }
        else {
            res.status(400).json({ message: 'invalid user data' })

        }

    } catch (error) {

    }



}

export const signin = async (req, res) => {


}

export const logout = async (req, res) => {


}
