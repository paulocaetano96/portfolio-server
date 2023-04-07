const express = require("express");
const router = express.Router();

//for the Nodemailer package, to be able to send emails
const nodemailer = require("nodemailer");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS, // my email address
        pass: process.env.EMAIL_PASSWORD, // my email password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.TO_EMAIL, // my email address
      subject: subject,
      text: `From: ${name} \n Email: ${email} \n Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

module.exports = router;
