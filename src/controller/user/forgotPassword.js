const User = require("../../model/userModel");
const auth = require("../../utils/auth");
const getMessage = require("../../utils/message");

const forgotPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    const verifyToken = await auth.verifyToken(req.cookies.token);
    const user = await User.findById(verifyToken.id);
    if (!user) {
      return res.status(404).send(getMessage("USER_NOT_FOUND"));
    }
    const passwordMatch = await auth.compareHash(oldPassword, user.password);
    if (!passwordMatch) {
      return res.send(getMessage("INVALID_PASSWORD"));
    }
    const passwordHash = await auth.generateHash(newPassword);
    await user.updateOne({ password: passwordHash }, { new: true });
    res.clearCookie("token");
    return res.status(200).send(getMessage("PASSWORD_CHANGED_SUCCESSFULLY"));
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = forgotPassword;
