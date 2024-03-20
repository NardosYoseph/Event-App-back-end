const eventController = require('../controllers/event_controllers');
const paymentService= require("../services/payment_service");
const express = require('express');
const router = express.Router();

async function paymentStatus(req, res) {
    console.log('Received callback:', req);
   const txnRef=req.params;
verifyPayment(txnRef);

      res.status(200).json(paymentStatus);
  }

  async function verifyPayment(txnRef) {
    try{
    const payment_status= router.get('https://api.chapa.co/v1/transaction/verify/$txnRef');
    console.log(payment_status)
    }catch{
res.status(500).json({message:"error storing payment"});
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
