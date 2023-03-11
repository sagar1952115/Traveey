const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    max: 10,
    min: 10,
  },
  position: {
    type: String,
    required: false,
  },
  hireDate: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee;
