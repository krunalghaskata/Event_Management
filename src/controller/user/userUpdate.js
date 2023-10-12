const User = require("../../model/userModel.js");

const userUpdate = async (req, res) => {
  try {
    const { email } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.status(404).send("USER NOT FOUND !!");
    }
    await userInstance.updateOne({ ...req.body });
    res.status(200).send("USER UPDATE");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = userUpdate;
