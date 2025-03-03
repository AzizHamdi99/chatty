import express from "express"
import { protectRoute } from "../middleware/authMiddleware.js"
import { getUsersForSidebar } from "../controllers/messageController.js"

const router = express.Router()


router.get('/users', protectRoute, getUsersForSidebar)





export default router