var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controllers/aboutController');

router.get('/', ctrlAbout.about);

module.exports = router;