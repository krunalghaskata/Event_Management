const Event = require("../../model/eventModel");

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const event = await Event.findByIdAndUpdate(id, update, { new: true });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.json(event);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateEvent;
