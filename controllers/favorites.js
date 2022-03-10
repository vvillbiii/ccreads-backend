const express = require("express");
const router = express.Router();
const { User } = require("../models");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
const verifyAuth = require("../controllers/verifyAuth");

router.get("/:article", verifyAuth, async (req, res) => {
  const { _id } = req.user;
  req.params.article = toId(req.params.article);
  try {
    const user = await User.findByIdAndUpdate(
      { _id },
      {
        $addToSet: { favoriteArticles: req.params.article },
      }
    );
    user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/", verifyAuth, async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById({ _id }).populate("favoriteArticles");
    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
