import express from 'express'
import { signup, signin, logout, updateProfile } from '../controllers/authController.js'
import { protectRoute } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile)

router.get('/check', protectRoute, chek)



export default router