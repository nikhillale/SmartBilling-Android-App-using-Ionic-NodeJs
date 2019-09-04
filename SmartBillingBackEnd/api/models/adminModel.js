const mongoose = require("mongoose");

const adminSchema= mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    name :String,
    streat :String,
    city : String,
    product :[{
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'productSchema'
    }],
    invoice :[{
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'invoiceSchema'
    }]
})

module.exports = mongoose.model('adminSchema',adminSchema);