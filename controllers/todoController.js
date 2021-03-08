const Todo = require("../models/todoModel");

// Create and Save a new Note
exports.create = (req, res) => {
  let { todo, completed, importance } = req.body;
  // Validate request
  if (!todo) {
    return res.status(400).send({
      message: "Todo can not be empty",
    });
  }

  // Create a Note
  const todox = new Todo({
    todo,
    completed,
    importance,
  });

  // Save Note in the database
  todox
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving todo.",
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Todo.find({})
    .sort({ createdAt: -1 })
    .exec(function (err, todos) {
      try {
        res.send(todos);
      } catch (error) {
        res.status(500).send({
          message:
            errror.message || "Some error occurred while retrieving todos.",
        });
      }
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  let { id } = req.params;
  Todo.deleteOne({ _id: id })
    .then((todo) => {
      if (todo.deletedCount === 0) {
        res.status(404).send({ message: "Todo not found in the list" });
      } else {
        res.status(200).send({ message: "Successfully Deleted" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error occurred while deleting the todo" });
    });
};
