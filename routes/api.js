var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/products');

router.get('/catalogue', productCtrl.index)

module.exports = router;