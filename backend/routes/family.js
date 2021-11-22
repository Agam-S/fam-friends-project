// PACKAGES
const router = require("express").Router();
const mongoose = require("mongoose");

// IMPORT FILES
const Family = require("../models/family");
const verifyToken = require("./verifyToken");
const vefifyToken = require("./verifyToken");
// ROUTES
// post method where API uses vefifyToken middleware to verify token and then creates a new family.
// the new family gets the user _id from the token and saves it to the database
// router.post("/", verifyToken, async (req, res) => {
//     const newFamily = new Family({
module.exports = router;
