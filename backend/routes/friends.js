// PACKAGES
const router = require("express").Router();
// IMPORT FILES
const friends = require("../models/friends");
const verifyToken = require("./verifyToken");
// ROUTES
router.get("/", verifyToken, async (req, res) => {
  const id = res.send(req.user._id);
  // friends.findbyOne({ _id: id });
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const newFriend = new Friends({
      name: req.body.name,
      age: req.body.age,
      hobbies: req.body.hobbies,
      favFood: req.body.favFood,
      user: req.user._id,
    });
    const savedFriend = await newFriend.save();
    res.json(savedFriend);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
