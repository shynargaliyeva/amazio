const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema({
    cart: {type: Boolean, default: true},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
}, {
    timestamps: true
})

module.export = mongoose.model('Order', orderSchema);