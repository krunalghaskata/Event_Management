const Event = require("../../model/eventModel");

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndRemove(id);

    if (deletedEvent) {
      res.status(201).json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteEvent;
