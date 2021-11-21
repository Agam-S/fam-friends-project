// PACKAGES
const router = require("express").Router();
const Joi = require("joi");
// IMPORT FILES
const User = require("../models/user");

// validation

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

// ROUTES
router.post("/signup", async (req, res) => {
  const { error } = schema.validate(req.body);
  res.send(error.details[0].message);
  //   const user = new User({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });
  //   try {
  //     const savedUser = await user.save();
  //     res.send(savedUser);
  //   } catch (err) {
  //     res.status(404).send(err);
  //   }
});

module.exports = router;
