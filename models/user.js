// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{type: String ,unique:false, required: true},
  profilePicture:{type: String ,unique:false, required: false},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  tickets: {type: Number,required:false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
