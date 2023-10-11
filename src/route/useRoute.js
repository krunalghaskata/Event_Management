const express = require("express");
const Controller = require("../controller/index");
 
const Routers = express.Router();

//GET API
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
 

exports.Routers = Routers;
