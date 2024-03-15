const express = require('express');
const router = express.Router();
const passport= require("../config/passport")

const eventController = require('../controllers/event_controllers');

router.post('/create',eventController.createEvent);
router.get('/allEvents', eventController.fetchEvent);
router.post('/event',passport.authenticate('jwt', { session: false }),eventController.fetchEventbyID);


module.exports = router;