const eventController = require('../controllers/event_controllers');
const _paymentService= require("../services/payment_service");
async function paymentStatus(req, res) {
    console.log('Received callback:', req);
   req.params
      res.status(200).json(paymentStatus);
  }

  async function storePayment(req, res) {
    console.log('Received callback:', req);
    
    _paymentService.
      res.status(200).json(paymentStatus);
  }

  module.exports = {paymentStatus};
