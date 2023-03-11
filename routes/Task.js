const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");
router.post("/task", createTask);
router.get("/task", getAllTasks);
router.patch("/task", updateTask);
router.delete("/task", deleteTask);

module.exports = router;
