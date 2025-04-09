import express from "express";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

// router.post("/tasks", authMiddleware, createTask);

export default router;
