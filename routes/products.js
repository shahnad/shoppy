var express = require('express');
const { getProductsController } = require('../controller/products');
var router = express.Router();

/* GET products. */
router.get('/get', (req, res, next) => getProductsController(req, res, next));

module.exports = router;