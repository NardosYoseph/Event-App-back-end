const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    description: {type: String ,unique:false, required: true},
    date: {type: Date ,unique:false, required: true},
    time:{type: String ,unique:false, required: true},
    rate: {type: Number ,unique:false, required: true},
    people: {type: Number ,unique:false, required: true},
    image: {type: String ,unique:false, required: true},
    // userId :{
    //   type: mongoose.
    //   reference :"User"
    // }

  });
  const Event = mongoose.model('Event', eventSchema);
  module.exports=Event