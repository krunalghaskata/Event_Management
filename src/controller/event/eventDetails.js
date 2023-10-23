const Event = require("../../model/eventModel");
const getMessage = require ('../../utils/message')
const eventDetails = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId).populate("organizer");
    if (!event) {
      return res.status(404).send(getMessage('EVENT_NOT_FOUND'));
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = eventDetails;
