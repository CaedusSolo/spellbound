import express from "express";
import User from "../models/User.js";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

const router = express.Router();

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(11);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

router.post("/register", async (req, res) => {
  try {
    const userInDB = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (userInDB) {
      return res.status(409).json({
        error: "Username or username already exists.",
      });
    }

    const hashedPassword = await hashPassword(req.body.password);

    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
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
