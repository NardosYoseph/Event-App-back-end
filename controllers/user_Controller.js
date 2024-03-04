const userService = require('../services/user_service');
const mongoose = require('mongoose');
const token= require('../config/generate_token');
const dbConnection = require('../config/database')
const passport= require("../config/passport");

async function register(req, res) {
 
    try {
        dbConnection
        const { username, email, password } = req.body;
        const newUser = await userService.registerUser(username, email, password);
        res.json({ message: 'User registered successfully!', data: newUser });
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
        console.log(req.body);
        console.log(req);
        console.log('failed to register');
    }
}; 
async function login(req, res) {
    
  
    try {
        dbConnection;
        const { email, password } = req.body;
        const loggedInUser = await userService.loginUser(email, password);
        const generatedToken = token.generateToken(loggedInUser);
        res.json({ message: 'Login successful!', token: generatedToken });
    } catch (err) {
        res.status(err.status || 401).json({ message: err.message });
    }
 }

 async function refreshToken(req, res) {
    
  
    try {
        dbConnection;
  
 
 passport.authenticate('jwt', { session: false }), (req, res) => {
    const userId = req.user.id; // Access user ID from verified refresh token
    const newAccessToken = generateAccessToken(userId); // Function to generate new access token
    res.json({ accessToken: newAccessToken });
  }
} catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: err.message });
  }

}

module.exports = {
    register,
    login,
    refreshToken
};
