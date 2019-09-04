
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const adminSchema = require('../models/adminModel');
const nodemailer = require('nodemailer');
const random = require('random')


exports.register=(req, res, next)=>{

    let admin = new adminSchema({
        _id : new mongoose.Types.ObjectId(),
        email: req.body.email,
        password : req.body.password,
        name : req.body.name,
        streat :req.body.streat,
        city : req.body.city,
    });
    admin.save((error , registered)=>{
        if(error){
            console.log(error);
        }else{
            res.status(200).json( registered);
        }

    })
}

exports.resetPassEmail=(req, res, next)=>{
    const mail= req.body.email
    const OTP=random.int(min = 1000, max = 2000);
    console.log(OTP);
    
    adminSchema.findOne({email :req.body.email},(error, result)=>{

        sendResetMail();
    })
    function sendResetMail(){
         res.status(200).json({OTP})

        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth: {
                user: 'nikhillale93@gmail.com',
                pass: 'gmhpac120tx'
            }
            
        });
        const mailOption ={
            from : 'nikhillale93@gmail.com',
            to: mail,
            subject: 'Reset Password',
            text: 'One Time Password is '+OTP
        }
        transporter.sendMail(mailOption , (error, info)=>{
            if(error){
                console.log(error);
            }else{
                console.log('Email sent: ' + info.response);
                res.status(200).json({message:'Email Sent'});
            }
        })
    }  
}

exports.resetPassword=(req, res, next)=>{
    let email2= req.body.email
    console.log(req.body);
    adminSchema.updateOne({email:email2},{$set :{password: req.body.password}}).then(response=>{
        res.status(200).json({
            message: "updated Success"
        })
    })
}

exports.login=(req, res, next)=>{
    let adminData= req.body
    adminEmail= adminData.email;
    
    adminSchema.findOne({email : adminData.email},(error , admin)=>{
        if(error){
            console.log(error);
        }else{
            if(!admin){
                res.status(401).json({error :'You are not authenticated user'}) 
            }else{
                if(admin.password !== adminData.password){
                    res.status(401).json({error : 'Invalid password'})
                }else{
                    let payload={subject:admin._id}
                    let token = jwt.sign(payload,'nikhil')
                     res.status(200).json({token :token})
                }
            }
        }
    })
}