const express = require("express");
const router = express.Router();
const { Article } = require("../models");

router.get("/", async (req, res) => {
  try {
    const count = await Article.count();
    const random = Math.floor(Math.random() * count);
    res.json(await Article.find().limit(3).skip(random));
    // res.json(await Article.sample(3).limit(3));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    res.json(await Article.create(body));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await Article.findById(id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedArticle = req.body;
  try {
    res.json(
      await Article.findByIdAndUpdate(id, updatedArticle, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await Article.findByIdAndDelete(id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
