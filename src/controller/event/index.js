const createEvent = require("./createEvent");
const inviteUser = require("./invitation");
const listEvent = require("./listEvent");
const eventDetails = require("./eventDetails");
const updateEvent = require('./eventUpdate')
const deleteEvent =require('./eventDelete')
module.exports = {
  createEvent,
  inviteUser,
  listEvent,
  eventDetails,
  updateEvent,
  deleteEvent
};
