const Note = require("../models/noteModel");

// Create and Save a new Note
exports.create = (req, res) => {
  let { title, content } = req.body;
  // Validate request
  if (!content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  // Create a Note
  const note = new Note({
    title: title || "Untitled Note",
    content,
  });

  // Save Note in the database
  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Note.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};
