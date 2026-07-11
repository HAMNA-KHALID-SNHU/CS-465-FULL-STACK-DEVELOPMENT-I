var express = require('express');
var router = express.Router();

const ctrlMeals = require('../controllers/mealsController');

router.get('/', ctrlMeals.meals);

module.exports = router;