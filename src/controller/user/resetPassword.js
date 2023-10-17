const User = require("../../model/userModel");
const auth = require("../../utils/auth");
const getMessage = require("../../utils/message");

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { resetToken } = req.params;

    const user = await User.findOne({ token: resetToken });
    if (!user) {
      return res.status(404).send(getMessage("USER_NOT_FOUND"));
    }

    user.password = await auth.generateHash(password);
    user.token = null;
    await user.save();
    return res.status(200).send(getMessage("PASSWORD_CHANGED_SUCCESSFULLY"));
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = resetPassword;
