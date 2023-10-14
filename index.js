require("dotenv").config();
const CONFIG = require("./src/config/config");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("./src/logger");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//*******************router************************* */
const userRouter = require("./src/route/useRoute");
const eventRouter = require("./src/route/eventRoute");
//*************************************************** */

//  *********** database connection*************************
mongoose
  .connect(CONFIG.DB.CONNECTION_URL)
  .then(() => {
    logger.info(" database Connection Successfully!")
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

//**********************ROUTER **************************************/
server.use("/users/", userRouter.Routers);
server.use("/events/", eventRouter.Routers);
//******************************************************************/
 
//*********************SERVER**************************************** */
server.listen(CONFIG.PORT, () => {
  logger.info(`Server listening on http://localhost:${CONFIG.PORT}`);
});
//******************************************************************* */