import jwt from 'jsonwebtoken'



export const generateToke = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"

    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 1000,//ms
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV!


    })


}