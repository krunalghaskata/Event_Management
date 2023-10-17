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

// try {
//   const { oldPassword, newPassword } = req.body;
//   const verifyToken = await auth.verifyToken(token);
//   const user = await User.findById(verifyToken.id);
//   if (!user) {
//     return res.status(404).send(getMessage("USER_NOT_FOUND"));
//   }
//   const passwordMatch = await (oldPassword, user.password);
//   if (!passwordMatch) {
//     return res.send(getMessage("INVALID_PASSWORD"));
//   }
//   const passwordHash = await auth.generateHash(newPassword);
//   await user.updateOne({ password: passwordHash }, { new: true });
//   res.clearCookie("token");
//   return res.status(200).send(getMessage("PASSWORD_CHANGED_SUCCESSFULLY"));
// } catch (error) {
//   res.status(500).send(error);
// }
