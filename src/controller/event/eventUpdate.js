const Event = require("../../model/eventModel");
const getMessage = require ('../../utils/message')

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const event = await Event.findByIdAndUpdate(id, update, { new: true });

    if (!event) {
      return res.status(404).send(getMessage('EVENT_NOT_FOUND'));
    }
    return res.json(event);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

module.exports = updateEvent;
