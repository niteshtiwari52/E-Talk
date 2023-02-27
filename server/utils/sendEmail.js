const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    html:
      "<p> Hi " +
      options.name +
      ",<br /> Please verify your E-Talk Account by clicking on the verification link. This Verification link is valid for 2:00 minutes <br /> <a href =" +
      options.verification_Link +
      " >Verify</a></p> ",
  };
  const mailInfo = await transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      // console.log(error);
    }
  });

  // console.log(mailInfo);
};

module.exports = sendEmail;
