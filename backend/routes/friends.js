// PACKAGES
const router = require("express").Router();
// IMPORT FILES
const Friends = require("../models/friends");
const verifyToken = require("./verifyToken");
// ROUTES
router.get("/", verifyToken, async (req, res) => {
  try {
    const friends = await Friends.find({ user: req.user._id });
    res.json(friends);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    // const { id } = res.send(req.user._id);
    const id = req.user._id;
    const newFriend = new Friends({
      name: req.body.name,
      age: req.body.age,
      hobbies: req.body.hobbies,
      favFood: req.body.favFood,
      user: id,
    });
    const savedFriend = await newFriend.save();
    res.json(savedFriend);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
