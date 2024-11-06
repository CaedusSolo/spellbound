import express from "express";
import User from "../models/User.js";
import { nanoid } from "nanoid";
const router = express.Router();

router.post("/register", async (req, res) => {
  console.log("Received request at /auth/register");
  try {
    console.log("Trying to create new User....");
    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      id: nanoid(),
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
