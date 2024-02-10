const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event_Controller');

router.post('/create', eventController.createEvent);

module.exports = router;