// PACKAGES
const router = require("express").Router();
// IMPORT FILES
const User = require("../models/user");
const { signUpValid, signInValid } = require("../validation");
// ROUTES
router.post("/signup", async (req, res) => {
  const { error } = signUpValid(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
