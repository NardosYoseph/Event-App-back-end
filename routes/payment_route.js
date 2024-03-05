const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/payment_controller');


router.post('/verifyPayment',paymentController.verifyPayment);
module.exports=router;