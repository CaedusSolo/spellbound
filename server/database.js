import mongoose from "mongoose";
import "dotenv/config";


async function connectToDatabase() {
  const connectionString = process.env.MONGO_URI;
  const con = await mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connected to mongoose");
    })
    .catch((err) => console.log(err));
}

export { connectToDatabase };
