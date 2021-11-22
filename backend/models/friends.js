const mongoose = require("mongoose");

const friSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String,
    required: true,
  },
  favFood: {
    type: String,
  },
  user: {
    type: String,
  },
});

module.exports = mongoose.model("friends", friSchema);
