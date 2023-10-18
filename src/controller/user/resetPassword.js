const User = require("../../model/userModel");
// const auth = require("../../utils/auth");
const getMessage = require("../../utils/message");

const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { resetToken } = req.params;

    const user = await User.findOne({ resetToken });

    if (!user) {
      return res.status(404).send(getMessage("USER_NOT_FOUND"));
    }

    user.password = newPassword;
    user.token = "";
    await user.save();

    res.send(getMessage("RESET_PASSWORD"));
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = resetPassword;
