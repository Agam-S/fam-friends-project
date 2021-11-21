const mongoose = require("mongoose");
const family = require("./family");
const friends = require("./friends");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },

  userMail: {
    type: String,
  },
  userPassword: {
    type: String,
  },
  family: [[mongoose.Schema.Types.ObjectId], { ref: "family" }],

  friends: [[mongoose.Schema.Types.ObjectId], { ref: "friends" }],
});

module.exports = mongoose.model("User", userSchema);
