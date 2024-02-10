const mongoose = require('mongoose');
const eventService = require('../services/event_service');

async function createEvent(req, res) {
    
    const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/'; // Change 'myDatabase' to your database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    try {
        const eventData = req.body;        
        const newEvent = await eventService.createEvent(eventData);

        res.status(201).json({ message: 'Event created successfully', newEvent });
        
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
    )}
module.exports = {
    createEvent,}