// const express = require("express");
// const router = express.Router();
// const { User, Article } = require("../models");
// const mongoose = require("mongoose");
// const toId = mongoose.Types.ObjectId;
// //add bookmark to user
// // const addBookmark = (user, articleId) => {
// //   User.findByIdAndUpdate(articleId, { $addToSet: {} });
// // };

// router.get("/bookmarks/:id/:article", async (req, res) => {
//   req.params.article = toId(req.params.article);
//   const id = req.params.id;
//   try {
//     const user = await User.findByIdAndUpdate(id, {
//       $addToSet: { bookmarks: req.params.article },
//     });
//     // user.bookmark = req.params.article;
//     user.save();
//     res.json(user);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// router.get("/favorites/:id/:article", async (req, res) => {
//   req.params.article = toId(req.params.article);
//   const id = req.params.id;
//   try {
//     const user = await User.findByIdAndUpdate(id, {
//       $addToSet: { favoriteArticles: req.params.article },
//     });
//     // user.bookmark = req.params.article;
//     user.save();
//     res.json(user);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// // router.get();

// module.exports = router;
