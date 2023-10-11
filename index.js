require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.json());

//*******************router************************* */
const userRouter = require("./src/route/useRoute");

//*************************************************** */

//  *********** database connection*************************
mongoose
  .connect("mongodb://localhost:27017/eventManagement")
  .then(() => {
    console.log("database Connection Successfully!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
//************************************************************/
server.use("/users/", userRouter.Routers);

server.listen(1900, () => {
  console.log("server start ");
});
