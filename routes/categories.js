var express = require('express');
const { success } = require('../utils/config');
const getCategories = require('../queries/categories');
var router = express.Router();

/* GET home page. */
router.get('/get', async function (req, res, next) {
    const categories = await getCategories();
    res.send({
        ...success,
        data: categories
    })
});

module.exports = router;
