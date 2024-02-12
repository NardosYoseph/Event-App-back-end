const userService = require('../services/user_service');
const mongoose = require('mongoose');
const generateToken= require('../config/generate_token');

async function register(req, res) {
    const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/'; // Change 'myDatabase' to your database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    try {
        const { username, email, password } = req.body;
        const newUser = await userService.registerUser(username, email, password);
        res.json({ message: 'User registered successfully!', data: newUser });
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
        console.log(req.body);
        console.log(req);
        console.log('failed to register');
    }
}
)}; 
async function login(req, res) {
    
    const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/'; // Change 'myDatabase' to your database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    try {
        const { email, password } = req.body;
        const loggedInUser = await userService.loginUser(email, password);
        // const token = generateToken(user);

        res.json({ message: 'Login successful!', user: loggedInUser });
    } catch (err) {
        res.status(err.status || 401).json({ message: err.message });
    }
  })}

module.exports = {
    register,
    login,
};
