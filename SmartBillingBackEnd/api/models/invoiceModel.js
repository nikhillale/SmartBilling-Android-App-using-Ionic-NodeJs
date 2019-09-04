const mongoose = require("mongoose");

const invoiceSchema= mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    customer:Object,
    productDetails:Object,
    invoiceNo :String
})

module.exports = mongoose.model('invoiceSchema',invoiceSchema);