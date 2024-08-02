const nodemailer = require('nodemailer');
const sendMail = async ( name, userEmail, emailSubject, emailBody) => {
    
    try {
        const mailerTransport = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user:`${process.env.EMAIL_USER}`,
                pass:`${process.env.EMAIL_PASS}`
            }
        })
        let mailDetails = {
            from: "Grotivate",
            to: `${userEmail}`,
            subject: `${emailSubject}`,
            html: `
                <div>
                    <h1>Hello ${name}</h1>
                    <p>${emailBody}</p>
                    
                </div>
            `,
        };

        await mailerTransport.sendMail(mailDetails);
    }
    catch {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent'); 
    }
};

module.exports = sendMail;