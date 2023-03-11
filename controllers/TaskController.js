const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const findTask = await Task.find({ title: req.body.title });
    if (findTask) {
      res.status(400).json({
        message: "This task is already created!",
      });
    } else {
      const newTask = new Task();
      if (req.body.title) newTask.title = req.body.title;
      if (req.body.description) newTask.description = req.body.description;
      if (req.body.dueDate) newTask.dueDate = req.body.dueDate;
      if (req.body.employeeId) newTask.employeeId = req.body.employeeId;

      const data = await newTask.save();
      if (data) {
        res.status(200).json({
          message: "Tasks created Successfully!",
          data: data,
        });
      } else {
        res.status(400).json({
          message: "Tasks not created successfully!",
        });
      }
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    if (allTasks) {
      res.status(200).json({
        message: "Tasks fetched Successfully!",
        data: allTasks,
      });
    } else {
      res.status(400).json({
        message: "Tasks not fetched successfully!",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.body._id;
    const newTask = new Task();
    if (req.body.title) newTask.title = req.body.title;
    if (req.body.description) newTask.description = req.body.description;
    if (req.body.dueDate) newTask.dueDate = req.body.dueDate;
    if (req.body.employeeId) newTask.employeeId = req.body.employeeId;

    const data = await Task.findByIdAndUpdate(
      taskId,
      { $set: newTask },
      { new: true }
    );
    if (data) {
      res.status(200).json({
        message: "Task updated Successfully!",
        data: data,
      });
    } else {
      res.status(400).json({
        message: "Task not updated successfully!",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.body._id;
    const data = await Task.deleteOne({ _id: taskId });
    if (data) {
      res.status(200).json({
        message: "Task deleted Successfully!",
        data: data,
      });
    } else {
      res.status(400).json({
        message: "Task not deleted !!",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
