const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

mongoose.connect("mongodb://127.0.0.1:27017/todo").then((err, db) => {
  console.log("database connected");
  app.listen(3000, () => {
    console.log(`Server is listening on 3000`);
  });
});
