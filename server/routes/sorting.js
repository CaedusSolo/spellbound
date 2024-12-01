import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/set_house", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (user) {
      user.house = req.body.house;
      await user.save();
      res.send(`Updated user's house to: ${req.body.house}!`);
      
    } else {
      res.status(404).send("User not found.");
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default router;
