const Event = require('../models/event'); 

async function createEvent(eventData) {
  const event = new Event(eventData);
  await event.save();
  return event;
}
async function fetchEvent() {
  const events = await Event.find();
  res.json(events);
}

module.exports = {
  createEvent,
  fetchEvent
};
