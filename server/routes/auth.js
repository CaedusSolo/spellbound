import express from 'express'
import User from '../models/User.js'
const router = express.Router();

router.post("/register", async (req, res) => {
  console.log("Received request at /auth/register")
  try {
    console.log("Trying to create new User....")
    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password1
    })
    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router