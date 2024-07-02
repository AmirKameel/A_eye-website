import nodemailer from "nodemailer";
const sendEmailService = async ({
  to = "",
  subject = "no-reply",
  message = "<h1>no-message</h1>",
  attachments = [],
}) => {
  const transporter = nodemailer.createTransport({
    host: "localhost",
    service: "gmail",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.mail, //true email from which i will send validation emails
      pass: process.env.pass,
    },
  });

  const info = await transporter.sendMail({
    from: `"A_Eye Team" <rihamibrahim171@gmail.com>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
    attachments, //if i want to attach file
  });
  
  return info.accepted.length?true:false
};
export default sendEmailService