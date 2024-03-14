
const upload = require("../services/multer");
const eventService = require('../services/event_service');
const dbConnection = require('../config/database'); 
const passport =require("../config/passport")
const User = require('../models/user');

async function createEvent(req, res) {
  try {
    dbConnection;
    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const eventData =req.body;
      const newEvent = await eventService.createEvent(eventData);
      res.status(200).json({ message: 'Event created successfully' , newEvent});
    })(req, res);
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: err.message });
  }

}
async function fetchEvent(req, res) {
  try {
    dbConnection;

    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
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
        }; 
      }));
      res.status(200).json({ message: 'Event fetched successfully',eventList: formattedEventList });
    })(req, res);

  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
async function fetchEventbyID(req, res) {
  try {
    dbConnection;

    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      console.log(req.params);
      const event = await eventService.fetchEventbyID(req.body.id);
      res.status(200).json({ message: 'Event fetched successfully',event: event });
    })(req, res);

  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// async function buyTicket(eventId, userId) {
//   try {
//     dbConnection;
//     passport.authenticate('jwt', { session: false }, async (err, user, info) => {
//       if (err || !user) {
//         return res.status(401).json({ error: 'Unauthorized' });
//       }
//     // Update Event (decrement ticketsAvailable and add user ID to attendees)
//     await Event.findOneAndUpdate(
//       { _id: eventId },
//       { $inc: { ticketsAvailable: -1 }, $push: { attendees: userId } },
//       { new: true } // Return the updated document
//     );

//     // Update User (optional: add purchased event ID to purchasedEvents)
//     if (userSchema.paths.purchasedEvents) { // Check if purchasedEvents field exists
//       await User.findByIdAndUpdate(userId, { $push: { purchasedEvents: eventId } });
//     }

//     console.log('Ticket purchased successfully!');
//   })(req, res);
//   } catch (error) {
//     console.error('Error purchasing ticket:', error);
//   }
// }


module.exports = {
  createEvent,
  fetchEvent,
  fetchEventbyID
}