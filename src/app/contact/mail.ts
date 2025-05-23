'use server'

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});


export async function envoyermail(name: string, email: string, message: string,) {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Contact via mon site de ${name}" <${process.env.EMAIL_USER}>`, // sender address
      to: "lena.colisson@gmail.com", // list of receivers
      subject: `Nouveau message de ${name}`, // Subject line
      text: `${name} (${email}) vous a contacté avec le message suivant:\n${message}`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    return true;
  } catch (err) {
    console.log("Error while sending the email", err);
    return err.message;
  }
}