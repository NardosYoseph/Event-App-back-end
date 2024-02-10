const Event = require('../models/event'); 

async function createEvent(eventData) {
  const event = new Event(eventData);
  await event.save();
  return event;
}

module.exports = {
  createEvent,
};
