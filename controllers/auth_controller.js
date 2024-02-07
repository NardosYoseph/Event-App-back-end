const express = require('express');
const user = require('./services/authServices'); // Import the user service
const tokenService  = require('./services/generate_token'); // Import the user service



const app = express();

// Register route
app.post('/register', async (req, res) => {
  try {
    const newUser = await user.registerUser(req.body.username,req.body.email, req.body.password);
    res.json({ message: 'User registered successfully!', data: newUser });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    
    const user = await user.loginUser(req.body.email, req.body.password);
    const token = tokenService.generateToken(user);
    res.json({ message: 'Login successful!', token });
  } catch (err) {
    res.status(err.status || 401).json({ message: err.message });
  }
});

// ... other routes

app.listen(3000, () => console.log('Server listening on port 3000!'));
