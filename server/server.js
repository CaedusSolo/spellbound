import express from "express";
import cors from "cors";
import authRouter from './routes/auth.js'
import { connectToDatabase } from "./database.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectToDatabase();
app.use("/auth", authRouter);

app.get("/", (req, res) => res.send("Hello World"));

export {app, PORT}