import express from "express"
import { protectRoute } from "../middleware/authMiddleware.js"

const router = express.Router()


router.get('/users', protectRoute, getUsersForSidebar)





export default router