const User = require("../../model/userModel");
const { generateHash } = require("../../utils/auth.js");
const getMessage = require("../../utils/message.js");
const sendMail = require('../../utils/email')

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(email && password && name)) {
      return res.send(getMessage("REQUIRED_INPUT"));
    }

    const userInstance = await User.findOne({ email });
    if (userInstance) {
      return res.send(getMessage("USER_EXIST"));
    }
    const hashPassword = await generateHash(password);
    const user = new User({
      name,
      email,
      password: hashPassword,
    });
    await user.save();
    await sendMail(email);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = signup;
