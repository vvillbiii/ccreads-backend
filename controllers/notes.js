const express = require("express");
const router = express.Router();
const { Note } = require("../models");
const verfiyAuth = require("./verifyAuth");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;

router.post("/", verfiyAuth, async (req, res) => {
  const { _id } = req.user;
  req.body.user_id = toId(_id);
  try {
    res.json(await Note.create(body));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
