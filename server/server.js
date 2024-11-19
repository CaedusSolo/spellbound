import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import { connectToDatabase } from "./database.js";
import jwt from "jsonwebtoken"

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

connectToDatabase();
app.use("/auth", authRouter);

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export {authenticateToken}