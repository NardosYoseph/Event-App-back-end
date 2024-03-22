const User = require('../models/user'); // Import the User model
const bcryptjs = require('bcryptjs');
const dbConnection = require('../config/database'); 
const user = mongoose.model('User');

async function registerUser(username,email, password) {
 
  dbConnection
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = new User({username, email, password: hashedPassword });
  await user.save();
  return user;
}

async function loginUser(email, password) {
  dbConnection
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email');
  }
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    throw new Error('password');
  }
  return user;
}

async function fetchUserbyID(userID) {
  dbConnection
  console.log(userID);

  const user = await User.findOne({_id:userID});
  return user;
}

async function findUserEvents(userId){
  console.log(userId);
  
    const events = await User.findById(userId).populate({
      path: 'events',
      match: { _id: { $in: user.events } } // Filter by IDs in user.events
    });
  console.log(events);
    
    return events;
    }
  

module.exports = {
  registerUser,
  loginUser,
  fetchUserbyID,
  findUserEvents
};
