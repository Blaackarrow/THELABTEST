const noteModel = require("../models/noteModel");

const noteController = {
  getNote: async (req, res) => {
    try {
      const [notes] = await noteModel.queryGetNote();
      res.send(notes);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  addNote: async (req, res) => {
    try {
      const note = req.body;
      const [result] = await noteModel.queryAddNote(note);

      console.log("note", note);
      console.log("result", result);
      if (result.affectedRows) {
        res.json({ message: "Note added" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },

  getNoteById: async (req, res) => {
    try {
      const { id } = req.params;
      const [note] = await noteModel.queryGetNoteById(id);
      res.send(note);
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = noteController;
