var express = require('express');
const { getNewsController } = require('../controller/news');
var router = express.Router();

/* GET users listing. */
router.get('/get', (req, res, next) => getNewsController(req, res, next));

module.exports = router;
