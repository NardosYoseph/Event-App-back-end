const mongoose = require('mongoose');
const upload = require("../services/multer");
const eventService = require('../services/event_service');
const multer = require('multer');
const dbConnection = require('../config/database');
const { bucket } = require('../config/firebase-config'); 


async function createEvent(req, res) {
   
  try {
    dbConnection;
    const eventData =req.body;
    // Use multer upload middleware to handle file upload
    // upload(req, res, async function (err) {
    //   if (err) {
    //     return res.status(400).json({ error: 'Image upload failed' });
    //   }

      // Check if req.file is populated
    //   if (!req.file) {
    //     return res.status(400).json({ error: 'Image is required' });
    //   }
    // const imageUrl = req.file.location;
    //   console.log(req.body);
    //   const eventData = {
    //     ...req.body,
    //     image: imageUrl
    //   };

      const newEvent = await eventService.createEvent(eventData);
      res.status(200).json({ message: 'Event created successfully', newEvent });

  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: err.message });
  }

}
async function fetchEvent(req, res) {

  try {
    dbConnection;

    const eventList = await eventService.fetchEvent();
    const formattedEventList = await Promise.all(eventList.map(async event => {
     
      return {
        _id: event._doc._id,
        description: event._doc.description,
        date: event._doc.date,
        time: event._doc.time,
        rate: event._doc.rate,
        people: event._doc.people,
        image:  event._doc.image,
      }; 
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