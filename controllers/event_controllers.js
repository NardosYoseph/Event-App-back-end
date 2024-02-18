const mongoose = require('mongoose');
const upload = require("../services/multer");
const eventService = require('../services/event_service');
const multer = require('multer');

async function createEvent(req,res) {

    const uri = 'mongodb+srv://nardos:nardi123@event.bb6br8p.mongodb.net/'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
   
     
    try {
        await upload(req, res, async (err) => { // Use await for consistency
          if (err instanceof multer.MulterError) {
            // Handle Multer-specific errors
            return res.status(400).json({ error: err.message });
          } else if (err) {
            // Handle other errors
            return res.status(500).json({ error: 'Internal server error' });
          }
    const filename = req.file.filename;
        
      const eventData = {
          ...req.fields, 
          image: 'public/' + filename  
      };   
        const newEvent = await eventService.createEvent(eventData);

        res.status(200).json({ message: 'Event created successfully', newEvent });
      });
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ error: "last error",  });
      }
  });
}
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