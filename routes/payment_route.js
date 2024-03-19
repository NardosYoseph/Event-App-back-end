const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/payment_controller');

router.get('/paymentStatus',paymentController.paymentStatus);
router.post('/storePayment',paymentController.storePayment);


module.exports=router;