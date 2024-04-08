const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'sharon.lueilwitz23@ethereal.email',
            pass: 'RUmfZw5cQMTPXnza9p'
        }
    });

    const info = await transporter.sendMail({
        from: '<mad@gmail.com>', // sender address
        to: "kashu19march@gmail.com", // list of receivers
        subject: "Hello ashu", // Subject line
        text: "Hello ashu", // plain text body
        html: "<b>Hello bro</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

}

module.exports = sendMail;