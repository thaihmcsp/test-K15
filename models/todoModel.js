const mongoose = require("./connectDB");

const TodoSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    deadline: Date,
    status: {
      type: String,
      enum: ["todo", "doing", "done"],
    },
    userId: {
      type: String,
      ref: "user",
    },
  },
  { collection: "todo" }
);

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;
