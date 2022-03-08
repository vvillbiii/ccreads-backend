const mongoose = require("mongoose");
const articleSchema = require("../models/article").schema;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      min: 1,
      max: 30,
      required: [true, "Enter your username here."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email here."],
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      max: 32,
      required: [true, "Password, minimun 8 and max 32 characters long."],
    },
    image: {
      type: String,
      require: [true, " Please upload your photo."],
      default:
        "https://static.vecteezy.com/system/resources/previews/002/608/327/non_2x/mobile-application-avatar-web-button-menu-digital-silhouette-style-icon-free-vector.jpg",
    },
    bookmarks: [articleSchema],
    favoriteArticles: [articleSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
