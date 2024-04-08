const express = require("express");
const nodemailer = require("nodemailer");
const sendMail = require("./controllers/sendMail");

const app = express();

const PORT = 8080;

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/mail",sendMail);

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
});