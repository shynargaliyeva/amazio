const Order = require('./../models/order');
const Product = require('./../models/product');

function create(req, res) {
    let newOrder = new Order;

   newOrder.id = req.body.id

    newOrder.save((err) => {
        if (err) console.log(err);
        Order.find({})
            .then(orders => res.json(oders).status(200))
    })
}

function addProduct(req, res) {
    Order.findOne({})
        .then(order => {
            order.products.push(req.body.id)
            order.save(function(err) {
                res.json(order)
            })
        })
}

function removeProduct(req, res) {
    Order.findOne({})
        .then(function(order) {
            order.products.remove(req.body.id)
            order.save(function(err) {
                res.json(order)
            })
        })
}

function index(req, res) {
    Order.findOne({})
        .populate('products')
        .exec(function(err, order) {
            if (err) console.log(err)
            res.json(order).status(200)
        })
}

module.exports = {
    create,
    addProduct,
    removeProduct,
    index
}