const eventController = require('../controllers/event_controllers');
const paymentService= require("../services/payment_service");
const axios= require("axios");
const express = require('express');
const router = express.Router();

async function paymentStatus(req, res) {
    console.log('Received callback:', req);
   const txnRef=req.params.txnRef;
 const response =await verifyPayment(txnRef);
if(response["status"]=="successful"){
  eventController.buyTicket
}
      res.status(200).json(paymentStatus);
  }

  async function verifyPayment(txnRef) {
    try{
    const payment_status= axios.get(`https://api.chapa.co/v1/transaction/verify/${txnRef}`);
    console.log(payment_status)
    }catch{
    }
    }
    async function storePayment(req, res) {
      console.log('Received callback:', req);
      try{
        const paymentData= await paymentService.storePayment(req.body);
        res.status(200).json(paymentData);
      }catch{
  res.status(500).json({message:"error storing payment"});
  
      }}
   
  
  module.exports = {
    paymentStatus,
    storePayment,
    verifyPayment
  };
