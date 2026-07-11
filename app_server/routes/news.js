var express = require('express');
var router = express.Router();

const ctrlNews = require('../controllers/newsController');

router.get('/', ctrlNews.news);

module.exports = router;