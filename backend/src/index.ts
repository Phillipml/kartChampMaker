import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import RacersListRoutes from "./routes/racersListRoutes";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api", RacersListRoutes);

if (!process.env.MONGO_URI!) {
  throw new Error("Missing the URI variable data to connect. Please");
}

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((err) => {
    console.log("DataBase connection error:", err.message);
  });
app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});
export default app;
