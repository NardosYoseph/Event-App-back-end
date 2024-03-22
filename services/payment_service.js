const dbConnection = require('../config/database'); 
const Payment = require('../models/payment');

async function storePayment(paymentData) {
    const payment = new Payment(paymentData);
    await payment.save();
    return payment;
  }


module.exports={storePayment}