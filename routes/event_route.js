const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event_controllers');

router.post('/create', eventController.createEvent);

module.exports = router;