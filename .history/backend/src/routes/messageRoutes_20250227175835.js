import express from "express"
import { protectRoute } from "../middleware/authMiddleware"

const router = express.Router()


router.get('/users', protectRoute,)





export default router