// PACKAGES
const router = require("express").Router();
const mongoose = require("mongoose");
const friends = require("../models/friends");
const family = require("../models/family");

// IMPORT FILES
const User = require("../models/user");

// ROUTES

router.get("/:userName/friends", async (req, res) => {
  try {
    const foundMem = await User.find({
      userName: req.params.userName,
    }).populate("friends");
    res.json(foundMem);
  } catch (err) {
    res.json(err);
  }
});

// GET ALL data in user.family
router.get("/:userName/family", async (req, res) => {
  try {
    const foundMem = await User.find({
      userName: req.params.userName,
    }).populate({ path: "User.family" });
    res.json(foundMem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const foundMem = await User.find();
    res.json(foundMem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:userName", async (req, res) => {
  try {
    const foundMem = await User.find({
      userName: req.params.userName,
    });
    res.json(foundMem);
  } catch (err) {
    res.json(err);
  }
});
// POST Family

router.post("/", async (req, res) => {
  const newMember = new User({
    userName: req.body.userName,
    userMail: req.body.userMail,
    userPassword: req.body.userPassword,
  });
  try {
    const savedMember = await newMember.save();
    res.json(savedMember);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.post("/:userName/friends", async (req, res) => {
//   try {
//     const foundMember = await User.findOne({ userName: req.params.userName });
//     if (!foundMember) return res.json({ message: "User not found" });
//     for (const friend of req.body.friends) {
//       // Create new friend
//       const newFriend = await friends.create({ ...friend });
//       // Add friend to user
//       foundMember.friends.push(newFriend);
//       await foundMember.save();
//     }
//     res.json(foundMember);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/:userName/family", async (req, res) => {
//   try {
//     const foundMember = await User.findOne({ userName: req.params.userName });
//     if (!foundMember) return res.json({ message: "User not found" });
//     for (const family of req.body.family) {
//       // Create new friend
//       const newfam = await friends.create({ ...family });
//       // Add friend to user
//       foundMember.family.push(newfam._id);
//       await foundMember.save();
//     }
//     res.json(foundMember);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// // DELETE BY NAME
// router.delete("/:name", async (req, res) => {
//   try {
//     const deletedMem = await Friends.deleteOne({ name: req.params.name });
//     res.json(deletedMem);
//   } catch (err) {
//     res.json(err);
//   }
// });

// // UPDATE BY NAME
// router.put("/:name", async (req, res) => {
//   try {
//     const updatedMemeber = await Friends.updateOne(
//       { name: req.params.name },
//       {
//         $set: {
//           name: req.body.name,
//           age: req.body.age,
//           hobbies: req.body.hobbies,
//           favFood: req.body.favFood,
//         },
//       }
//     );
//     res.json(updatedMemeber);
//   } catch (err) {
//     res.json(err);
//   }
// });

router.post("/:userName/friends", async (req, res) => {
  try {
    const foundMember = await User.findOne({ userName: req.params.userName });
    if (!foundMember) return res.json({ message: "User not found" });

    // bulk create friends
    const newFriends = await friends.insertMany(req.body.friends); // assuming friends is an array of object with key name and age
    const frieldIds = newFriends.map((friend) => friend);
    foundMember.friends = [...foundMember.friends, ...frieldIds];
    await foundMember.save();
    res.json(foundMember);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
