const User = require("../../model/userModel.js");
const { generateHash } = require("../../utils/auth");
const getMessage = require("../../utils/message");

const userUpdate = async (req, res) => {
  try {
    const { email } = req.body;
    let { password } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.send(getMessage("USER_NOT_FOUND"));
    }
    if (password) {
      password = await generateHash(password);
    }
    await userInstance.updateOne({ ...req.body, password });
    // await purgeCacheByKey(userInstance.id);
    res.status(200).send(getMessage("USER_UPDATED"));
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = userUpdate;
