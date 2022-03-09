const express = require("express");
const router = express.Router();
const { Note } = require("../models");
const verfiyAuth = require("./verifyAuth");

// router.post("/", verfiyAuth, async (req, res) => {
//   const body = req.body;
//   try {
//     res.json(await Note.create(body));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

module.exports = router;
