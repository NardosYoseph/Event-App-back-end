const eventController = require('../controllers/event_controllers');
const paymentService = require("../services/payment_service");
const axios = require("axios");
const express = require('express');
const router = express.Router();

async function paymentStatus(req, res) {
  console.log('Received callback:', req.body);
  const txnRef = req.params.txnRef;
  try{
  const verificationResponse = await verifyPayment(txnRef);

  if (verificationResponse === 'success') {
    const { userId, eventId } = await retrieveUserEventId(txnRef);

    try {
      const eventPurchased = await eventController.buyTicket(eventId, userId);
      res.status(200).json({ message: 'Ticket purchased successfully!', event: eventPurchased });
    } catch (error) {
      console.error('Error purchasing ticket:', error);
      res.status(500).json({ message: 'Failed to purchase ticket' }); 
    }
  } else {
    console.error('Payment verification failed:', verificationResponse);
    res.status(400).json({ message: 'Payment verification failed' }); 
  }  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ message: 'Internal server error' }); 
  }
}


async function verifyPayment(txnRef) {
  try {
    const response = await axios.get(`https://api.chapa.co/v1/transaction/verify/${txnRef}`);
    const payment_status=response.status;
    console.log("verification:", payment_status.status)
    return payment_status;
  } catch {
  }
}
async function storePayment(req, res) {
  try {
    const paymentData = await paymentService.storePayment(req.body);
    res.status(200).json({ message: 'payment stored successfuly', payment: paymentData });
  } catch {
    res.status(500).json({ message: "error storing payment" });

  }
}
async function retrieveUserEventId(txnRef) {
  try {
    const response = await paymentService.retrieveUserEventId(txnRef);
    return response;
  } catch (error) {
    console.error('Error retrieving user and event ID:', error);
    throw error;
  }
}


module.exports = {
  paymentStatus,
  storePayment,
  verifyPayment
};
