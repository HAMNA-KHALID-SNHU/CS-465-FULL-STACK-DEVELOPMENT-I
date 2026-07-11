var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../controllers/travlrController');

/* GET Travel page */
router.get('/', ctrlTravlr.travel);

module.exports = router;