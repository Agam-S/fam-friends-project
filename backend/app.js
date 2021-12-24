// PACKAGES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// CONFIGS
dotenv.config();
PORT = process.env.PORT | 5000;

// IMPORT FILES
const family = require("./routes/family");
const friends = require("./routes/friends");
const user = require("./routes/user");

// MONGOOSE CONNECTION
mongoose.connect(process.env.DBS_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

// MIDDLEWARE CONFIGS

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;

// ROUTES REDIRECTION
app.use("/family", family);
app.use("/friends", friends);
app.use("/", user);

// SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send({ message: "Welcome to this project" });
});
