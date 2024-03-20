
const upload = require("../middleware/multer");
const eventService = require('../services/event_service');
const User = require('../models/user');

async function createEvent(req, res) {
  try {
      const eventData =req.body;
      const newEvent = await eventService.createEvent(eventData);
      res.status(200).json({ message: 'Event created successfully' , newEvent});
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: err.message });
  }
}
async function fetchEvent(req, res) {
  try {
      const eventList = await eventService.fetchEvent();
      const formattedEventList = await Promise.all(eventList.map(async event => {
        return {
          _id: event._doc._id,
          title:event._doc.title,
          description: event._doc.description,
          date: event._doc.date,
          time: event._doc.time,
          rate: event._doc.rate,
          people: event._doc.people,
          image:  event._doc.image,
          price: event._doc.price
        }; 
      }));
      res.status(200).json({ message: 'Event fetched successfully',eventList: formattedEventList });
  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
async function fetchEventbyID(req, res) {
  try {
      const event = await eventService.fetchEventbyID(req.body.id);
      res.status(200).json({ message: 'Event fetched successfully',event: event });
  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function buyTicket(eventId, userId) {
  try {
    const eventPurchased = await eventService.buyTicket(eventId,userId);
      res.status(200).json({ message: 'Ticket purchased successfully!',event: eventPurchased });

    console.log('Ticket purchased successfully!');
 
  } catch (error) {
    console.error('Error purchasing ticket:', error);
  }
}

async function searchEvent(req, res) {
  const searchTerm = req.params.q; // Access search term from query parameter
console.log(searchTerm)
  try {
    const events= await eventService.searchEvent(searchTerm);

    res.status(200).json({ message: 'Events searched successfully', events });
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  createEvent,
  fetchEvent,
  searchEvent,
  fetchEventbyID,
  buyTicket
}