var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../controllers/travlrController');

router.get('/', ctrlTravlr.index);

module.exports = router;