const Event = require('../models/event'); 


async function createEvent(eventData) {
  dbConnection; 
  const event = new Event(eventData);
  await event.save();
  return event;
}
async function fetchEvent() {
  dbConnection; 
  const events = await Event.find();
  return events;
}
async function fetchEventbyID(eventID) {
  dbConnection; 
  const event = await Event.findOne({_id:eventID});
  return event;
}
async function buyTicket(eventId, userId) {
  dbConnection; 
  const eventPurchased= await Event.findOneAndUpdate(
    { _id: eventId },
    { $inc: { availableTickets: -1 }, $push: { attendees: userId } },
    { new: true } 
  );
  if (userSchema.paths.events) { 
    await User.findByIdAndUpdate(userId, { $push: { events: eventId } });
  }
  return eventPurchased;
}

module.exports = {
  createEvent,
  fetchEvent,
  fetchEventbyID,
  buyTicket
};
