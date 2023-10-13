const User = require("../../model/userModel");
const getMessage = require("../../utils/message");
const { compareHash, generateToken } = require("../../utils/auth");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.send(getMessage("SIGNUP"));
    }
    const comparePassword = await compareHash(password, userInstance.password);
    if (!comparePassword) {
      return res.send(getMessage("INVALID_PASSWORD"));
    }
    const token = await generateToken({ id: userInstance.id });
    userInstance.token = token;
    userInstance.save();
    res.status(200).send({
      message: getMessage("LOGIN_SUCCESS"),
      userToken: token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = login;
