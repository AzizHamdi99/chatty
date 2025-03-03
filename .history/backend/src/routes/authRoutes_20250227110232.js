import express from 'express'

const router = express.Router()

router.get("/signup", signup)
router.get("/signin", signin)
router.get("/logout", logout)



export default router