import jwt from 'jsonwebtoken'



export const generateToke = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"

    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24

    })


}