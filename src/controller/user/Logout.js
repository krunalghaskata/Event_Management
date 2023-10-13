const User = require("../../model/userModel.js");
const getMessage = require("../../utils/message");

const logout = async (req, res) => {
  try {
    const user = await User.findOne({ token: req.body.token });

    if (!user) {
      return res.status(404).send(getMessage("USER_NOT_FOUND"));
    }
    user.token = null;
    await user.save();

    return res.status(200).send(getMessage("LOG_OUT"));
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = logout;
