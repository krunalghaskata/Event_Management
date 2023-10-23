const User = require("../../model/userModel");
const auth = require("../../utils/auth");
const getMessage = require("../../utils/message");

const updatePassword = async (req, res) => {
  
  try {
    const { email, oldPassword, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send(getMessage("USER_NOT_FOUND"));
    }

    const isMatch = await auth.compareHash(oldPassword, user.password);

    if (!isMatch) {
      return res.status(401).send(getMessage("INVALID_OLD_PASSWORD"));
    }
 
    const hashedPassword = await auth.generateHash(newPassword);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).send(getMessage("PASSWORD_UPDATE"));
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = updatePassword;

 