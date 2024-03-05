const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/pament_controller');


router.post('/verifyPayment',paymentController.verifyPayment);
module.exports=router;