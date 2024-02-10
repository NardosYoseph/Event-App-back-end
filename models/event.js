const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    description: String,
    date: Date,
    time: String,
    image: String,
    rate: Number,
    people: Number
  });
  const Event = mongoose.model('Event', eventSchema);
  module.exports=Event;