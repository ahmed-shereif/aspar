import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";


interface ContactData {
  name: string;
  email: string;
  message: string;
  phone:string;
}


export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message , phone } = req.body as ContactData;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "asparcontacter@gmail.com",
      pass: "uaquramnlbpavhgl",
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: "yahya.nageh99@gmail.com",
    subject: "New message from your contact form",
    text: `name:${name} \nphone:${phone} \nmessage:${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Message failed to send." });
  }
};