const mongoose = require('mongoose');

const eventQrSchema = new mongoose.Schema({
  eventName: {type: String ,unique:false, required: true},
  scanned: {type: Boolean ,unique:false, required: false},
  expired: {type: Boolean ,unique:false, required: false},
  });
  const EventQr = mongoose.model('EventQr', eventQrSchema);
  module.exports=EventQr