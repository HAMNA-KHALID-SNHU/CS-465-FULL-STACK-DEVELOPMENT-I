var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controllers/aboutController');

/* GET About page */
router.get('/', ctrlAbout.about);

module.exports = router;