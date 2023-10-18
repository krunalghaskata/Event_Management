const express = require("express");
const Controller = require("../controller/index");

const Routers = express.Router();

Routers.post("/createEvent", Controller.createEvent);
Routers.post("/inviteUser/:id", Controller.inviteUser);
Routers.get('/eventList',Controller.listEvent)
exports.Routers = Routers;
