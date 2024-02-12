const User = require('../models/user'); // Import the User model
const bcryptjs = require('bcryptjs');
const generateToken= require('./generate_token');

async function registerUser(username,email, password) {
 
  
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
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }
  const token = generateToken(user);
  
  return res.json({ token });
}
module.exports = {
  registerUser,
  loginUser,
};
