const mongoose = require("mongoose"); // Erase if already required

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
