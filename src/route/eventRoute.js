const express = require("express");
const Controller = require("../controller/index");

const Routers = express.Router();

Routers.post("/createEvent", Controller.createEvent);

exports.Routers = Routers;
    