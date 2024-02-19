const mongoose = require('mongoose');
const upload = require("../services/multer");
const eventService = require('../services/event_service');
const multer = require('multer');
const dbConnection = require('../config/database')
const fs = require('fs');

async function createEvent(req, res) {
   
  try {
    dbConnection;
    upload(req, res, async (err) => { 
     
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err });
      }
      const filename = req.file.filename;
      console.log(req.body);
      const eventData = {
        ...req.body,
        image: filename
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
    const formattedEventList = eventList.map(event => ({
      _id: event._doc._id,
      description: event._doc.description,
      date: event._doc.date,
      time: event._doc.time,
      rate: event._doc.rate,
      people: event._doc.people,
      image:  `https://event-app-back-end.onrender.com/public/${event._doc.image}` // Replace example.com with your domain
      ,
    }));
    res.status(200).json({ message: 'Event fetched successfully', eventList: formattedEventList });
  
  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
module.exports = {
  createEvent,
  fetchEvent
}