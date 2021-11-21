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
});

module.exports = mongoose.model("family", famSchema);
