// import Express from "express";
const express = require("express");
// const PORT = 5000 | process.env.PORT;
const dotenv = require("dotenv");
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import UserRoute from "./routes/User.js";
const UserRoute = require("./routes/User");

// import TaskRoute from "./routes/Task.js";
const TaskRoute = require("./routes/Task");
// import cors from "cors";
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", false);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api", UserRoute);
app.use("/api", TaskRoute);

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log("db connected");
    app.listen(process.env.PORT, () => {
      console.log("App is listening at " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err);
  });
