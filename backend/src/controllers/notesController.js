import Note from "../modals/Notes.js";

export async function getALlNote(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error In getALlNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error In createNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!updatedNote) return res.staus(404).json({ message: "Note not found" });
    res.status(201).json(updatedNote);
  } catch (error) {
    console.error("Error In updateNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function deleteNote(req, res) {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note Not found" });
    res.status(200).json({ message: "Note deleted Successfully" });
  } catch (error) {
    console.error("Error In deleteNote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note Not Found!" });
    res.json(note);
  } catch (error) {
    console.error("Error In getNoteById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
