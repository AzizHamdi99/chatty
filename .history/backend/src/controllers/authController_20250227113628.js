import express from 'express'

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 charaters" })
        }



    } catch (error) {

    }



}

export const signin = async (req, res) => {


}

export const logout = async (req, res) => {


}
