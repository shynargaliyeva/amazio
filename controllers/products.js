const Product = require('./../models/product');

function index(req, res) {
    Product.find({})
        .then((product) => res.json(product).status(200))
        .then(err => console.log(err));
}

module.exports = {
    index
}