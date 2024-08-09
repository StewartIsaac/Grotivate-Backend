const nodemailer = require("nodemailer");
const sendMail = async (name, email, subject, message) => {
  try {
    let mailerTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.EMAIL_PASS}`,
      },
    });
    let mailDetails = {
      from: `"Grotivate" <${process.env.EMAIL_USER}>`,
      to: `${email}`,
      subject: `${subject}`,
      html: `
                <div>
                    <h1>Hello ${name}</h1>
                    <p>${message}</p>
                    
                </div>
            `,
    };

    await mailerTransport.sendMail(mailDetails);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendMail;
