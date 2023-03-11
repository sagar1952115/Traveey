const Employee = require("../models/User");
// import Employee from "../../models/User";

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee();
    if (req.body.name) employee.name = req.body.name;
    if (req.body.email) employee.email = req.body.email;
    if (req.body.phone) employee.phone = req.body.phone;
    if (req.body.position) employee.position = req.body.position;
    if (req.body.hireDate) employee.hireDate = req.body.hireDate;
    const data = await employee.save();
    if (data) {
      res.status(200).json({
        status: "success",
        message: "User created Successfully!",
        data: data,
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Error in creating User!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find({});
    if (allEmployees) {
      res.status(200).json({
        message: "Employees fetched Successfully!",
        data: allEmployees,
      });
    } else {
      res.status(400).json({
        message: "Error in fetching Employees!",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employeeId = req.body._id;
    const employee = new Employee();
    if (req.body.name) employee.name = req.body.name;
    if (req.body.email) employee.email = req.body.email;
    if (req.body.phone) employee.phone = req.body.phone;
    if (req.body.position) employee.position = req.body.position;
    if (req.body.hireDate) employee.hireDate = req.body.hireDate;
    const data = await Employee.findByIdAndUpdate(
      employeeId,
      { $set: employee },
      { new: true }
    );
    if (data) {
      res.status(200).json({
        message: "Employee updated Successfully!",
        data: data,
      });
    } else {
      res.status(400).json({
        message: "Employee not updated successfully!",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.body._id;
    const data = await Employee.deleteOne({ _id: employeeId });
    if (data) {
      res.status(200).json({
        message: "Employee deleted Successfully!",
        data: data,
      });
    } else {
      res.status(400).json({
        message: "Error in deleting Employee",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
