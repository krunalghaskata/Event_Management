const express = require("express");
const Controller = require("../controller/index");
const checkAuth = require('../middleWare/checkAuth')

const Routers = express.Router();

//GET API
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
Routers.get("/getUser/:id",checkAuth, Controller.getUser);
Routers.get("/allUser",checkAuth, Controller.allUserFind);
Routers.patch("/userUpdate",checkAuth, Controller.userUpdate);
Routers.delete("/userDelete", checkAuth,Controller.userDelete);
Routers.post("/logout", Controller.logout);

exports.Routers = Routers;
