var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../controllers/travlrController');

/* GET Home page */
router.get('/', ctrlTravlr.index);

module.exports = router;