require("../config/db.connections");

module.exports = {
  article: require("../controllers/article"),
  auth: require("../controllers/auth"),
  verifyAuth: require("../controllers/verifyAuth"),
};
