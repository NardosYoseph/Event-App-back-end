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
            console.log("ft not found in db")
            throw new Error('Payment not found');
    }
    return { userId: payment.userId, eventId: payment.eventId };
}
    


module.exports={
    storePayment,
 retrieveUserEventId,
}