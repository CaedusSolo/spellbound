import mongoose from "mongoose";
import "dotenv/config";
import {app, PORT} from "./server.js";

async function connectToDatabase() {
  const connectionString = process.env.MONGO_URI;
  const con = await mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connected to mongoose");
      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => console.log(err));
}

export { connectToDatabase };
