import express from 'express'
const router = express.Router();

router.post("/register", async (req, res) => {
  console.log("Received request at /auth/register")
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router