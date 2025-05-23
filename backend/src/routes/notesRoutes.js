import express from "express";
import {
  createNote,
  deleteNote,
  getALlNote,
  updateNote,
  getNoteById,
} from "../controllers/notesController.js";

const router = express.Router();

export default router;

router.get("/", getALlNote);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

// mongodb+srv://adithyank978:2kS8WG48ta3tTWqi@cluster0.9qawehf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
