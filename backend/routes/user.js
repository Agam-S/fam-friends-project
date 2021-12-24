// PACKAGES
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// IMPORT FILES
const User = require("../models/user");
const { signUpValid, signInValid } = require("../validation");
const verifyToken = require("./verifyToken");

// ROUTES

// singup

router.post("/signup", async (req, res) => {
  // validation
  const { error } = signUpValid(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  // if user already exists
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(200).send("Email/ User already exists");

  // Hash and Salt Passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  // try to post new user
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(404).send(err);
  }
});

// login
router.post("/login", async (req, res) => {
  // validation
  const { error } = signInValid(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  // check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(200).send("Email not found ://");

  // check if password is correct
  const correctPass = await bcrypt.compare(req.body.password, user.password);
  //   if password is wrong
  if (!correctPass) return res.status(400).send("Password is Invalid ://");

  // create and send token

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.json({ token: token });
});

// home
router.get("/dash", verifyToken, async (req, res) => {
  res.send("Welcome to the Dashboard");
});

module.exports = router;
