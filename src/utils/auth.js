const CONFIG = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateHash = async (password) => {
  const hash = await bcrypt.hash(password, 10); //add salt round by config
  return hash;
};

const compareHash = async (password, hash) => {
  const compare = await bcrypt.compare(password, hash);
  return compare;
};

const generateToken = async (payload) => {
  const token = await jwt.sign(payload, CONFIG.JWT.SECRET, {
    expiresIn: CONFIG.JWT.LIFE_TIME,
  });
  return token;
};

const verifyToken = async (token) => {
  const decoded = jwt.verify(token, CONFIG.JWT.SECRET);
  return decoded;
};

module.exports = {
  generateHash,
  compareHash,
  generateToken,
  verifyToken,
};
