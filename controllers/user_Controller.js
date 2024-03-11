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
 passport.authenticate('jwt', { session: false },async (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    } 
    const userId = req.user.id; // Access user ID from verified refresh token
    const newAccessToken = token.generateToken(userId); // Function to generate new access token
    res.json({ accessToken: newAccessToken });
  })(req, res);
} catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: err.message });
  }

}
async function fetchUserbyID(req, res) {
    try {
      dbConnection;
  
      passport.authenticate('jwt', { session: false }, async (err, user, info) => {
        if (err || !user) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
        console.log(req.params);
        const event = await userService.fetchUserbyID(req.body.id);
        res.status(200).json({ message: 'Event fetched successfully',event: event });
      })(req, res);
  
    } catch (err) {
      console.error('Error fetching event:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {
    register,
    login,
    refreshToken,
    fetchUserbyID
};
