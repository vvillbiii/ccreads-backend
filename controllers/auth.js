const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    res.json(await User.create(user));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
