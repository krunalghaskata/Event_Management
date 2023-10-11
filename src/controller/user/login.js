const User = require("../../model/userModel");

const login = async (req, res) => {
  try {
    const { email } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.send("SIGNUP");
    }

    await userInstance.save();
    res.status(200).send("LOGIN_SUCCESS");
  } catch (error) {
   res.status(500).send(error);
  }
};

module.exports = login;
