const eventController = require('../controllers/event_controllers');

async function paymentStatus(req, res) {
    console.log('Received callback:', req);
    const paymentStatus = { // Simulate payment status object
        success: true,
        message: 'Payment finished!'
      };
    
      res.status(200).json(paymentStatus);
  }

  module.exports = {paymentStatus};