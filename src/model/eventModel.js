const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Event", eventSchema);
