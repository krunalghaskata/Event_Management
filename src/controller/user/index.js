const signup = require("./register");
const login = require("./login");
const getUser = require("./userFind");
const allUserFind = require("./allUser");
const userUpdate = require("./userUpdate.js");
const userDelete = require("./userDelete");
const logout = require("./Logout");
const forgotPassword = require("./forgotPassword");
const resetPassword = require("./resetPassword");
const updatePassword = require("./updatePassword");
module.exports = {
  signup,
  login,
  getUser,
  allUserFind,
  userUpdate,
  userDelete,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
};
