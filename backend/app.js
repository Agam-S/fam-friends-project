// PACKAGES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// CONFIGS
dotenv.config();

// IMPORT FILES
const family = require("./routes/family");
const friends = require("./routes/friends");
const user = require("./routes/user");

// MONGOOSE CONNECTION
mongoose.connect(process.env.DBS_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

// MIDDLEWARE CONFIGS
// const corsOptions = {
//   origin: "http://localhost:5000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;

// ROUTES REDIRECTION
app.use("/family", family);
app.use("/friends", friends);
app.use("/", user);

// SERVER
const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send({ message: "Welcome to this project" });
});
