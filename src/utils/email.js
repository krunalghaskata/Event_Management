/* eslint-disable consistent-return */
const nodemailer = require("nodemailer");
const CONFIG = require("../config/config");
const logger = require("../logger");

const sendMail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: CONFIG.EMAIL.USER,
        pass: CONFIG.EMAIL.PASSWORD,
      },
    });

    const mailOptions = {
      from: CONFIG.EMAIL.USER,
      to: email,
      subject: "hello dear friend",
      text: " welCome to my new  application",
    };

    const data = await transporter.sendMail(mailOptions);
    logger.info(`${data.accepted} ${data.response} ${data.messageId}`);
  } catch (error) {
    return error;
  }
};

module.exports = sendMail;
