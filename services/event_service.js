const Event = require('../models/event'); 

async function createEvent(eventData) {
  const event = new Event(eventData);
  await event.save();
  return event;
}
async function fetchEvent() {

  const events = await Event.find();
  return events;
}
async function fetchEventbyID(eventID) {
  console.log(eventID);

  const event = await Event.findOne({_id:eventID});
  return event;
}

module.exports = {
  createEvent,
  fetchEvent,
  fetchEventbyID
};
