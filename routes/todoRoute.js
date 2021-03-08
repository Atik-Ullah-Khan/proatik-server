const router = require("express").Router();
const todos = require("../controllers/todoController");

// Create a new Note
router.post("/", todos.create);

// Retrieve all Notes
router.get("/", todos.findAll);

// Delete a Note with noteId
router.delete("/:id", todos.delete);

module.exports = router;
