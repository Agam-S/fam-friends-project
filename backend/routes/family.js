// PACKAGES
const router = require("express").Router();
// IMPORT FILES
const Family = require("../models/family");
const verifyToken = require("./verifyToken");
// ROUTES
router.get("/", verifyToken, async (req, res) => {
  try {
    const family = await Family.find({ user: req.user._id });
    res.json(family);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/view/:_id", verifyToken, async (req, res) => {
  try {
    const family = await Family.findById(req.params._id);
    res.json(family);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/edit/:_id", verifyToken, async (req, res) => {
  try {
    const family = await Family.findById(req.params._id);
    res.json(family);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/add", verifyToken, async (req, res) => {
  try {
    // const { id } = res.send(req.user._id);
    const id = req.user._id;
    const newFamily = new Family({
      name: req.body.name,
      age: req.body.age,
      hobbies: req.body.hobbies,
      favFood: req.body.favFood,
      user: id,
    });
    const savedFamily = await newFamily.save();
    res.json(savedFamily);
  } catch (err) {
    res.json({ message: err });
  }
});
router.put("/edit/:_id", verifyToken, async (req, res) => {
  try {
    const updatedFamily = await Family.findOneAndUpdate(
      { _id: req.params._id },
      {
        name: req.body.name,
        age: req.body.age,
        hobbies: req.body.hobbies,
        favFood: req.body.favFood,
      }
    );
    res.json(updatedFamily);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:_id", verifyToken, async (req, res) => {
  try {
    const delPerson = await Family.findByIdAndDelete(req.params._id);
    res.json({ message: "Family Member deleted", delPerson });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
