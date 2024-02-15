const mongoose = require('mongoose');
const upload = require("../services/multer");
const eventService = require('../services/event_service');

async function createEvent(req,res) {
    
    const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    upload(req,res, async function (err) {
      if (err instanceof multer.MulterError) {
          // A Multer error occurred during file upload
          return res.status(500).json({ error: err.message });
      } else if (err) {
          // An unknown error occurred
          return res.status(500).json({ error: 'Internal server error' });
      }
    try {
      const imagePath = req.file.path;
        
      const eventData = {
          ...req.body, 
          image: imagePath 
      };   
        const newEvent = await eventService.createEvent(eventData);

        res.status(200).json({ message: 'Event created successfully', newEvent });
        
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
  });
})}
    async function fetchEvent(req, res) {
    
      const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/';
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      console.log('Connected to MongoDB');
      try {     
          const eventList = await eventService.fetchEvent();
  
          res.status(200).json({ message: 'Event fetched successfully', eventList });
          
      } catch (err) {
          console.error('Error fetching event:', err);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
      )}
module.exports = {
    createEvent,
    fetchEvent
  }