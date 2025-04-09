import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task API is running...");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started at port no ${PORT}`);
});
