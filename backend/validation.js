// PACKAGES
const Joi = require("joi");

// VALIDATION
const signUpValid = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const signInValid = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
module.exports.signUpValid = signUpValid;
module.exports.signInValid = signInValid;
