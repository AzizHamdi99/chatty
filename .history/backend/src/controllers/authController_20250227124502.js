import express from 'express'
import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { generateToken } from '../libs/utils.js'
export const signup = async (req, res) => {
    const { fullname, email, password } = req.body
    try {

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are  required" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 charaters" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "invalide informations" })
        }
        const salt = await bcrypt.genSalt(10)
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
                fullname: newUser.fullname,
                email: newUser.email,
                profilPic: newUser.profilePic

            })


        }
        else {
            res.status(400).json({ message: 'invalid user data' })

        }

    } catch (error) {
        console.log("error  in signup controller", error.message)
        res.status(500).json({ message: "Interval server error" })

    }



}

export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })


        if (!user) {
            return res.status(400).json({ message: "invlide credentials" })

        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        generateToken(user._id, res)
        res.status(200).json({
            _id: user
        })





    } catch (error) {

    }


}

export const logout = async (req, res) => {


}
