var express = require('express');
const { getCategoriesController } = require('../controller/categories');
var router = express.Router();

/* GET categories. */
router.get('/get', (req, res, next) => getCategoriesController(req, res, next));

module.exports = router;
