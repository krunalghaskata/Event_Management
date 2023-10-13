const CONFIG = require("../config/config");
const { verifyToken } = require("../utils/auth");
const User = require("../model/userModel");
const getMessage = require("../utils/message");

const checkAuth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(403).send(getMessage('REQUIRED_TOKEN'));
    }
    token = token.slice(7);
    const decoded = await verifyToken(token, CONFIG.JWT.SECRET);
    const { id } = decoded;
    const user = await User.findById(id);
    if (!user) {
      return res.send(getMessage('REQUIRE_LOGIN'));
    }
  } catch (error) {
    if (error.message === 'jwt expired') {
      return res.status(500).send(getMessage('TOKEN_EXPIRES'));
    }
    return res.status(500).send(error);
  }
  return next();
};

module.exports = checkAuth;
