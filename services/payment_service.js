const dbConnection = require('../config/database'); 
const Payment = require('../models/payment');

async function storePayment(paymentData){
dbConnection;
const payment=Payment(paymentData);
await Payment.save;
return payment;

}


exports.module={storePayment}