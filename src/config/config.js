require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DB: {
    CONNECTION_URL: process.env.DB_CONNECTION_URL,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    LIFE_TIME: process.env.JWT_LIFE_TIME,
  },
  EMAIL: {
    USER: process.env.EMAIL_USER,
    PASSWORD: process.env.EMAIL_PASSWORD,
  },
};
module.exports = config;
