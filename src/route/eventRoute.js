const express = require("express");
const Controller = require("../controller/index");

const Routers = express.Router();

Routers.post("/createEvent", Controller.createEvent);
Routers.post("/inviteUser/:id", Controller.inviteUser);
Routers.get("/eventList", Controller.listEvent);
Routers.get("/eventDetails/:id", Controller.eventDetails);
Routers.patch("/updateEvent/:id", Controller.updateEvent);
Routers.delete("/deleteEvent/:id", Controller.deleteEvent);

exports.Routers = Routers;
