const EventQr = require('../models/eventQr'); 
const mongoose = require('mongoose');
const dbConnection = require('../config/database'); 


async function createQr(eventQr){
dbConnection;
const eventQR=new EventQr(eventQr);
await eventQR.save();
return eventQR;
}
async function fetchEventQr(qrId) {
    dbConnection; 
    const eventQR = await EventQr.findOne({_id:qrId});
    return eventQR;
  }
module.exports={
createQr,
fetchEventQr
};