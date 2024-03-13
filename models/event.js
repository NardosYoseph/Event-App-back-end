const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {type: String ,unique:false, required: true},
    description: {type: String ,unique:false, required: true},
    date: {type: Date ,unique:false, required: true},
    time:{type: String ,unique:false, required: true},
    rate: {type: Number ,unique:false, required: true},
    price: {type: Number ,unique:false, required: true},
    totalTickets: {type: Number ,unique:false, required: true},
    paidTickets: {type: Number ,unique:false, required: true},
    image: {type: String ,unique:false, required: true},
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    // userId :{
    //   type: mongoose.
    //   reference :"User"
    // }

  });
  const Event = mongoose.model('Event', eventSchema);
  module.exports=Event