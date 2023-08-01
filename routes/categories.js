var express = require('express');
const { getCategoriesController } = require('../controller/categories');
var router = express.Router();

/* GET home page. */
router.get('/get', async function (req, res, next) {
    getCategoriesController(req, res, next)
});

module.exports = router;
