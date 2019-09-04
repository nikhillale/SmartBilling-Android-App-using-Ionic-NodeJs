
const mongoose = require('mongoose');
const adminSchema = require('../models/adminModel');
const productSchema = require('../models/productModel');


exports.userData=(req, res, next)=> {
    let user= req.params.email;
    adminSchema.findOne({email :user})
    .select('name city streat')
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(error =>{
        res.status(400).json(error)
    })
}

exports.getProductByUser=(req, res, next)=>{
    let userMail= req.params.email
    adminSchema.find({email :userMail})
    .populate('product')
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(error=>{
        res.status(400).json(error);
    })
}

exports.addProductByUser=async(req, res, next)=>{
    let adminEmail= req.body.email;
    const product = new  productSchema({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        brand : req.body.brand,
        price : req.body.price,
        ram : req.body.ram,
        rom : req.body.rom
    })
   const item=await product.save();
    adminSchema.updateOne({email:adminEmail},{$push : {product:item._id}})
    .then(result=>{
        res.status(200).json({
            result : result        
        })
    })
    .catch(error=>{
        res.status(401).json({
            error:error
        })
    })
}