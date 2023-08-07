var express = require('express');
const { getNewsController, insertNewsController } = require('../controller/news');
var router = express.Router();

/* GET users listing. */
router.get('/get', (req, res, next) => getNewsController(req, res, next));

router.post('/create',(req, res, next)=>insertNewsController(req, res, next))

module.exports = router;
