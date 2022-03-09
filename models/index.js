require("../config/db.connections");

module.exports = {
  Article: require("./article"),
  User: require("./user"),
  Note: require("./note"),
};
