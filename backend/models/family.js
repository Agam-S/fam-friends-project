const mongoose = require("mongoose");

const famSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String,
  },
  favFood: {
    type: String,
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("family", famSchema);
