const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("todo", TodoSchema);

module.exports = User;
