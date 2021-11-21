// PACKAGES
const router = require("express").Router();
const mongoose = require("mongoose");

// IMPORT FILES
const Family = require("../models/family");
// ROUTES

// GET ALL
router.get("/", async (req, res) => {
  try {
    const foundMem = await Family.find();
    res.json(foundMem);
  } catch (err) {
    res.json(err);
  }
});

// GET BY ID
router.get("/:name", async (req, res) => {
  try {
    const foundMemby = await Family.find({ name: req.params.name });
    res.json(foundMemby);
  } catch (err) {
    res.json(err);
  }
});

// POST NEW MEMBER
router.post("/", async (req, res) => {
  const newMember = new Family({
    name: req.body.name,
    age: req.body.age,
    hobbies: req.body.hobbies,
    favFood: req.body.favFood,
  });
  try {
    const savedMember = await newMember.save();
    res.json(savedMember);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE BY NAME
router.delete("/:name", async (req, res) => {
  try {
    const deletedMem = await Family.deleteOne({ name: req.params.name });
    res.json(deletedMem);
  } catch (err) {
    res.json(err);
  }
});

// UPDATE BY NAME
router.put("/:name", async (req, res) => {
  try {
    const updatedMemeber = await Family.updateOne(
      { name: req.params.name },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          hobbies: req.body.hobbies,
          favFood: req.body.favFood,
        },
      }
    );
    res.json(updatedMemeber);
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
