import express from "express"
import { authenticateToken } from "../server.js"

const router = express.Router()

router.post("/set_house", async (req, res) => {
    res.send(`User's house: ${req.body.house}`)
})

export default router