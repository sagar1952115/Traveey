const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
    unique: true,
  },
  dueDate: {
    type: String,
    required: false,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Task = mongoose.model("task", taskSchema);
module.exports = Task;
