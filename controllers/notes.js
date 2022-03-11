const express = require("express");
const router = express.Router();
const { Note } = require("../models");
const verifyAuth = require("./verifyAuth");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;

router.post("/:article", verifyAuth, async (req, res) => {
  const { _id } = req.user;
  req.body.user = toId(_id);
  req.params.article = toId(req.params.article);
  req.body.article = req.params.article;
  const body = req.body;
  try {
    res.json(await Note.create(body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", verifyAuth, async (req, res) => {
  const { _id } = req.user;
  try {
    res.json(await Note.find({ user: _id }));
  } catch (error) {
    res.status(400).json(error);
  }
});

// router.put("/", verfiyAuth, async (req, res) => {
//   const { _id } = req.user;
//   //   try {
//   //     res.json(await Note.find({ _id }));
//   //   } catch (error) {
//   //     res.status(400).json(error);
//   //   }
// });

module.exports = router;
