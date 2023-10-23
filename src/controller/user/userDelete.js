const User = require("../../model/userModel");
const getMessage = require("../../utils/message");

const userDelete = async (req, res) => {
  try {
    const { email } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.send(getMessage("USER_NOT_FOUND"));
    }
    await userInstance.deleteOne({ email });
    res.status(200).send(getMessage("USER_DELETE`"));
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = userDelete;
