const Product = require('./../models/product');

function index(req, res) {
    Product.find({})
        .then(products => res.json(products).status(200))
        .then(err => console.log(err));
}

module.exports = {
    index
}