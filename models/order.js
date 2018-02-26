const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema({
   products: [{type: mongoose.Schema.Types.ObjectiD, ref: 'Product'}]
})

module.export = mongoose.model('Order', orderSchema);