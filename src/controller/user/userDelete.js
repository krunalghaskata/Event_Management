const User = require("../../model/userModel");

const userDelete = async (req, res) => {
  try {
    const { email } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.status(404).send("USER NOT FOUND !!");
    }
    await userInstance.deleteOne({ email });
    res.status(200).send("USER DELETE");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = userDelete;
