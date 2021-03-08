const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    todo: String,
    completed: Boolean,
    importance:String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
