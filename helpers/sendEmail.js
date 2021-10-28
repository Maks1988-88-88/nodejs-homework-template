const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "maks98242@gmail.com" };
  try {
    await sgMail.send(email);
    console.log("Email send");
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
