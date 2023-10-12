const User = require("../../model/userModel");

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userInstance = await User.findById(id);
    if (!userInstance) {
      return res.status(404).send("USER NOT FOUND !!!");
    }
    return res.status(200).send(userInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getUser;
