const Event = require("../../model/eventModel");
// const User = require('../models/user');

const eventDetails = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId).populate("organizer");
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = eventDetails;
