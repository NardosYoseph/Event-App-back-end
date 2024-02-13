const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event_controllers');

router.post('/create', eventController.createEvent);
router.get('/allEvents', eventController.fetchEvent);


module.exports = router;