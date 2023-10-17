const express = require("express");
const Controller = require("../controller/index");
const checkAuth = require("../middleWare/checkAuth");

const Routers = express.Router();

// API ROUTER
Routers.get("/getUser/:id", checkAuth, Controller.getUser);
Routers.get("/allUser", checkAuth, Controller.allUserFind);
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
Routers.post("/logout", Controller.logout);
Routers.patch("/userUpdate", checkAuth, Controller.userUpdate);
Routers.delete("/userDelete", checkAuth, Controller.userDelete);
Routers.post("/resetPassword/:token", checkAuth, Controller.resetPassword);
Routers.post("/updatePassword", Controller.updatePassword);
Routers.post("/forgotPassword", Controller.forgotPassword);

exports.Routers = Routers;
