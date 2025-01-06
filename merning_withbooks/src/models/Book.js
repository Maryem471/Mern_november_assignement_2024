const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
      minlength: [2, "Title must be at least 2 characters long."],
      maxlength: [255, "Title cannot exceed 255 characters."],
    },
    author: {
      type: String,
      required: [true],
      minlength: [5, "Author name must be at least 5 characters long."],
      maxlength: [255, "Author name cannot exceed 255 characters."],
    },
    pages: {
      type: Number,
      required: [true],
      min: [1, "Number of pages must be at least 1."],
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
