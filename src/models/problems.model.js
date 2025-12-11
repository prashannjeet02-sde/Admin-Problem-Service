const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  difficult: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },
  testCases: [
    {
      input: { type: String, required: true },
      output: { type: String, required: true },
    },
  ],
  editorial: {
    type: String,
  },
});

const Problems = mongoose.model("Problem", ProblemSchema);

module.exports = Problems;
