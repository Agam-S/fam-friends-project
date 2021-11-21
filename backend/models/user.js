const mongoose = require("mongoose");
const family = require("./family");
const friends = require("./friends");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 4,
    max: 255,
    required: true,
  },

  email: {
    type: String,
    min: 4,
    max: 255,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 1024,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
