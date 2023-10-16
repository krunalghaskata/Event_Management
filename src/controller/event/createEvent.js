const Event = require("../../model/eventModel");
const getMessage = require("../../utils/message");

const createEvent = async (req, res) => {
  try {
    const { name, date, description, organizer, attendees } = req.body;
    if (!(name && date && description)) {
      return res.send(getMessage("REQUIRED_INPUT"));
    }
    const event = new Event({
      name,
      date,
      description,
      organizer,
      attendees,
    });

    await event.save();
    res.status(201).send(event);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = createEvent;
