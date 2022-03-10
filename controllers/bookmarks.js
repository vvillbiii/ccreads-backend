const express = require("express");
const router = express.Router();
const { User } = require("../models");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
const verfiyAuth = require("../controllers/verifyAuth");

router.get("/:article", verfiyAuth, async (req, res) => {
  req.params.article = toId(req.params.article);
  const { _id } = req.user;
  try {
    const user = await User.findByIdAndUpdate(_id, {
      $addToSet: { bookmarks: req.params.article },
    });
    user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", verfiyAuth, async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById({ _id }).populate("bookmarks");
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
