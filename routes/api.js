var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/products');
var orderCtrl = require('../controllers/orders');

router.get('/catalogue', productCtrl.index)
router.post('/checkout', orderCtrl.create)
router.get('/checkout', orderCtrl.index)
router.post('/checkout/add', orderCtrl.addProduct)
router.delete('/checkout/delete', orderCtrl.removeProduct)

module.exports = router;