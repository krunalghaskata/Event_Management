const Event = require("../../model/eventModel");

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const event = await Event.find(eventData);
    if (!event) {
      return res.status(404).send("NOT FOUND" );
    }
    res.status(201).send(event);
  } catch (err) {
    res.status(400).send(error);
  }
};

module.exports = createEvent;
