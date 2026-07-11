var express = require('express');
var router = express.Router();

const ctrlRooms = require('../controllers/roomsController');

router.get('/', ctrlRooms.rooms);

module.exports = router;