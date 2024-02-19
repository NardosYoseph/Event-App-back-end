const mongoose = require('mongoose');
const upload = require("../services/multer");
const eventService = require('../services/event_service');
const multer = require('multer');
const dbConnection = require('../config/database')

async function createEvent(req, res) {
   
  try {
    dbConnection;
    upload(req, res, async (err) => { 
     
      if (err instanceof multer.MulterError) {
        // Handle Multer-specific errors
        return res.status(400).json({ error: err.message });
      } else if (err) {
        // Handle other errors
        return res.status(500).json({ error: err });
      }
      const filename = req.file.filename;
      console.log(req.fields);
      const eventData = {
        ...req.fields,
        image: 'public/' + filename
      };
      const newEvent = await eventService.createEvent(eventData);

      res.status(200).json({ message: 'Event created successfully', newEvent });
    });
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: err.message });
  }

}
async function fetchEvent(req, res) {

  try {
    dbConnection;
    const eventList = await eventService.fetchEvent();

    res.status(200).json({ message: 'Event fetched successfully', eventList });

  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }

}
module.exports = {
  createEvent,
  fetchEvent
}