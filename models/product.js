const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema ({
    name: String,
    price: Number,
    description: String,
    sku: String
})

module.exports = mongoose.model('Product', productSchema)