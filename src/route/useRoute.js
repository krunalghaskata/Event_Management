const express = require("express");
const Controller = require("../controller/index");

const Routers = express.Router();

//GET API
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
Routers.get("/getUser/:id", Controller.getUser);
Routers.get("/allUser", Controller.allUserFind);
Routers.patch('/userUpdate', Controller.userUpdate);
Routers.delete('/userDelete', Controller.userDelete);
Routers.post('/logout',Controller.logout)

exports.Routers = Routers;
