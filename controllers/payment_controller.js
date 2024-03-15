const eventController = require('../controllers/event_controllers');

async function paymentStatus(req, res) {
    console.log('Received callback:', req);
        res.status(200);
    
  }

  module.exports = {paymentStatus};