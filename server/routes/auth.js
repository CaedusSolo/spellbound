import express from "express";
import User from "../models/User.js";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import axios from "axios";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../server.js";

dotenv.config({
  path: "../../../.env",
});

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

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).json({ error: "User does not exist." });
    }

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (result) {
        const authenticatedUser = { username: req.body.username };
        const accessToken = jwt.sign(
          authenticatedUser,
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        return res.status(200).json({ accessToken: accessToken, message: "Logged In!" });
      }

      return res.status(401).json({ error: "Passwords do not match." });
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.post("/verify_recaptcha", async (req, res) => {
  const { captchaValue } = req.body;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_SECRET_KEY}&response=${captchaValue}`
  );
  response.send(data);
});

export default router;
