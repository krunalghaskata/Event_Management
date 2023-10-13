const signup = require("./register");
const login = require("./login");
const getUser = require("./userFind");
const allUserFind = require("./allUser");
const userUpdate = require("./userUpdate.js");
const userDelete = require("./userDelete");
const logout = require("./Logout");
module.exports = {
  signup,
  login,
  getUser,
  allUserFind,
  userUpdate,
  userDelete,
  logout,
};
