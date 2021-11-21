const mongoose = require("mongoose");

const friSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("friends", friSchema);
