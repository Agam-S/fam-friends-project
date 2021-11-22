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
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("friends", friSchema);
