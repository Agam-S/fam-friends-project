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

router.get("/view/:_id", verifyToken, async (req, res) => {
  try {
    const friends = await Friends.findById(req.params._id);
    res.json(friends);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/edit/:_id", verifyToken, async (req, res) => {
  try {
    const friends = await Friends.findById(req.params._id);
    res.json(friends);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/add", verifyToken, async (req, res) => {
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

router.put("/edit/:_id", verifyToken, async (req, res) => {
  try {
    const updatedFriend = await Friends.findOneAndUpdate(
      { _id: req.params._id },
      {
        name: req.body.name,
        age: req.body.age,
        hobbies: req.body.hobbies,
        favFood: req.body.favFood,
      }
    );
    res.json({ message: "Friend added!" });
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:_id", verifyToken, async (req, res) => {
  try {
    const delPerson = await Friends.findByIdAndDelete(req.params._id);
    res.json({ message: "Friend deleted", delPerson });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
