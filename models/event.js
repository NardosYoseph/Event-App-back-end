const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    description: String,
    date: Date,
    time: String,
    rate: Number,
    people: Number,
    image: String,

  });
  const Event = mongoose.model('Event', eventSchema);
  module.exports=Event