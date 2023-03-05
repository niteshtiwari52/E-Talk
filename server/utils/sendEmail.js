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
    html: options.message_Content,
  };
  const mailInfo = await transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      // console.log(error);
    }
  });

  // console.log(mailInfo);
};

module.exports = sendEmail;
