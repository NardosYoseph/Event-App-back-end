// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{type: String ,unique:false, required: true},
  profilePicture:{type: String ,unique:false, required: false},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }] 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
