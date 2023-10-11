const User = require("../../model/userModel");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      return res.send("REQUIRED_INPUT");
    }
    const UserInstance = await User.findOne({ email });
    if (UserInstance) {
      return res.send("USER_EXIST");
    }

    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = signup;
