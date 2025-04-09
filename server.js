import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started at port no ${PORT}`);
});
