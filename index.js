require("dotenv").config();
const CONFIG = require("./src/config/config");
const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.json());

//*******************router************************* */
const userRouter = require("./src/route/useRoute");

//*************************************************** */

//  *********** database connection*************************
mongoose
  .connect(CONFIG.DB.CONNECTION_URL)
  .then(() => {
    console.log("database Connection Successfully!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
//************************************************************/
server.use("/users/", userRouter.Routers);

server.listen(CONFIG.PORT, () => {
  console.log("server start ");
});
