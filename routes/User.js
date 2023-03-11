const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/UserController.js");

router.post("/user", createEmployee);
router.get("/user", getAllEmployees);
router.patch("/user", updateEmployee);
router.delete("/user", deleteEmployee);

module.exports = router;
