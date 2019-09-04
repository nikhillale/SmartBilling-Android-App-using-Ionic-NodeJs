
const mongoose = require('mongoose');
const adminSchema = require('../models/adminModel');
const invoiceSchema = require('../models/invoiceModel');



exports.invoiceDetails=(req, res, next)=>{
    let userEmail= req.params.email;
    adminSchema.findOne({email:userEmail})
    .populate('invoice')
    .then(result=>{
        res.status(200).json(result);   
    })
    .catch(error=>{
        res.status(400).json(error);
    })

}

exports.invoiceData=async(req, res, next)=>{
    console.log(req.body);
    let str= req.body.invoiceNo;
    let user=req.params.email;
    let invNo;  
   await adminSchema.findOne({email :user})
    .select('invoice')
    .exec()
    .then(res=>{
       invNo= res.invoice.length;  
    })
    let cusEmail= req.body.email;
    const invoice= new invoiceSchema({
        _id : new mongoose.Types.ObjectId(),
        customer:req.body.customer,
        productDetails:req.body.productDetails,
        invoiceNo :req.body.invoiceNo+'-'+(invNo++)
    })
    const item=await invoice.save();
    adminSchema.updateOne({email:cusEmail},{$push : {invoice:item._id}})
    .then(result=>{
        res.status(200).json({
            result : item.invoiceNo        
        })
    })
    .catch(error=>{
        res.status(401).json({
            error:error
        })
    })

}