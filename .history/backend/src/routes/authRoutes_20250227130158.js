import express from 'express'
import { signup, signin, logout } from '../controllers/authController.js'
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/logout", logout)

router.put("/update-profile", updateProfile)



export default router