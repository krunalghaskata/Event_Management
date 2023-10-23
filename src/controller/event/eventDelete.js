const Event = require("../../model/eventModel");
const  getMessage = require('../../utils/message')

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndRemove(id);

    if (deletedEvent) {
      res.status(201).send(getMessage("EVENT_DELETE"));
    } else {
      res.status(404).send(getMessage("EVENT_NOT_FOUND"));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = deleteEvent;
