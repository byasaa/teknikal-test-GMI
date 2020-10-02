const nodemailer = require("nodemailer");
const config = require("../configs");

module.exports = {
  sendOtp: (data) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password,
      },
    });
    const Options = {
      from: `Test Teknikal 👻 <${config.nodemailer.email}>`, // sender address
      to: data.email, // list of receivers
      subject: "OTP CODE", // Subject line
      text: data.code,
    };
    transporter.sendMail(Options, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  },
};
