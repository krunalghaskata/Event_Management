const Event = require("../../model/eventModel");
const User = require("../../model/userModel");
const getMessage = require("../../utils/message");

const inviteUser = async (req, res) => {
    try {
      const { email } = req.body;
      const { id } = req.params.id;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send(getMessage("USER_NOT_FOUND"));
    }
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).send(getMessage("EVENT_NOT_FOUND"));
    }

    user.events.push(event);
    await user.save();

    return res.status(200).send(getMessage("INVITE_USER"));
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = inviteUser;
