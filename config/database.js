const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/'; // Change 'myDatabase' to your database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
 // client.close();
module.exports = mongoose.connection;
