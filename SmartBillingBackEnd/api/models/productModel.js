const mongoose = require("mongoose");

const productSchema= mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    name: String,
    brand: String,
    price: String,
    ram: String,
    rom: String
})

module.exports = mongoose.model('productSchema',productSchema);