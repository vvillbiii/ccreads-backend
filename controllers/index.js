require("../config/db.connections");

module.exports = {
  article: require("../controllers/article"),
  auth: require("../controllers/auth"),
  verifyAuth: require("../controllers/verifyAuth"),
  bookmarks: require("../controllers/bookmarks"),
  favorites: require("../controllers/favorites"),
  //   notes: require("../controllers/notes"),
};
