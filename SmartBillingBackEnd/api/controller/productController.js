
const productSchema = require('../models/productModel');



exports.updateProduct=(req, res, next)=>{
    const id = req.params.id;
    const updateOps ={};
    updateOps['name']=req.body.name;
    updateOps['brand']=req.body.brand;
    updateOps['price']=req.body.price;
    updateOps['ram']=req.body.ram;
    updateOps['rom']=req.body.rom;

    productSchema.update({_id : id}, {$set :updateOps})
    .exec()
    .then( result =>{
        res.status(200).json({
            message : "Employee details Are Updated"   
        })
    })
    .catch( error =>{
        res.status(500).json({
            message : error
        })
    });
}

exports.getProduct=(req, res, next)=>{
    const Id = req.params.id;
    productSchema.findOne({_id : Id})
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(error =>{
        res.status(400).json(error);
    })
}

exports.deleteProduct= (req, res, next)=>{
    const Id= req.params.id;
    productSchema.remove({_id : Id})
    .exec()
    .then( result =>{
        res.status(200).json(result)
    })
    .catch( error =>{
        res.status(500).json(error)
    })   
}