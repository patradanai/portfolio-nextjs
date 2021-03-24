const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const { name, email, message } = req.body;
  // config สำหรับของ Zoho
  var transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_EMAIL,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.NEXT_PUBLIC_MAIL_EMAIL, // sender
    to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL, // list of receivers
    subject: `${name} Leave message to you`, // Mail subject
    html: `Name : ${name}
           Email : ${email}
           Message : ${message}
    `, // HTML body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
  });

  res.end();
}
