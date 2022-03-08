const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/register", (req, res) => {
  res.json("registration page");
});

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    const foundUser = await User.exists({ email: req.body.email });
    if (foundUser) {
      return res.redirect("/login");
    }
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    res.json(await User.create(user));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/login", (req, res) => {
  res.json("login page");
});

router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser)
      return res.send("Either the username or password is incorrect");
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (!match) return res.json("Either the username or password is incorrect");
    return res.json("login successful");
  } catch (error) {
    res.status(400).json(error);
  }
});

// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     res.json(await User.findByIdAndDelete(id));
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

module.exports = router;
