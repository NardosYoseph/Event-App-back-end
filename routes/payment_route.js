const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/payment_controller');

router.post('/paymentStatus',paymentController.paymentStatus);

module.exports=router;