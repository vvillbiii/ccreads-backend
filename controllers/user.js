const express = require("express");
const router = express.Router();
const { User } = require("../models");
const verifyAuth = require("../controllers/verifyAuth");
const bcrypt = require("bcryptjs");

router.get("/", verifyAuth, async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById({ _id });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/", verifyAuth, async (req, res) => {
  const { _id } = req.user;
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(req.body.password, salt);
  req.body.password = hash;
  const body = req.body;
  try {
    const user = await User.findByIdAndUpdate(_id, body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/", verifyAuth, async (req, res) => {
  const { _id } = req.user;
  try {
    const user = User.findByIdAndDelete({ _id });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
