const dbConnection = require('../config/database'); 
const Payment = require('../models/payment');

async function storePayment(paymentData){
dbConnection;
const payment=Payment(paymentData);
await Payment.save;
return payment;

}
async function retrieveUserEventId(txnRef){
    dbConnection;
    const payment = await Payment.findOne({ txnRef }).populate('userId eventId');
      
          if (!payment) {
            throw new Error('Payment not found');
    }
    return { userId: payment.userId, eventId: payment.eventId };
}
    


exports.module={
    storePayment,
 retrieveUserEventId,
}