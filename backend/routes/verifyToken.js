const jwt = require("jsonwebtoken");

module.exports = function (req, res) {
  const token = req.header("token");
  if (!token) return res.status(401).send("please login again");

  try {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verify;
  } catch (err) {
    res.status(400).send("invalid token");
  }
};
