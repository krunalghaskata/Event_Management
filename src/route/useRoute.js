const express = require("express");
const Controller = require("../controller/index");
const checkAuth = require('../middleWare/checkAuth')

const Routers = express.Router();

// API ROUTER
Routers.get("/getUser/:id",checkAuth, Controller.getUser);
Routers.get("/allUser",checkAuth, Controller.allUserFind);
Routers.get('/resetPassword',Controller.resetPassword)
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
Routers.post("/logout", Controller.logout);
Routers.post('/forgotPassword', Controller.forgotPassword)
Routers.patch("/userUpdate",checkAuth, Controller.userUpdate);
Routers.patch('/updatePassword', Controller.updatePassword)
Routers.delete("/userDelete", checkAuth, Controller.userDelete);


exports.Routers = Routers;
