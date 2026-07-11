var express = require('express');
var router = express.Router();

const ctrlRooms = require('../controllers/roomsController');

/* GET Rooms page */
router.get('/', ctrlRooms.rooms);

module.exports = router;