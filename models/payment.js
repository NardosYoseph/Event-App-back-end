// models/payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount:{type: String ,unique:false, required: true},
    currency:{type: String ,unique:false, required: false},
    tx_ref: { type: String, unique: true, required: true }, 
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
