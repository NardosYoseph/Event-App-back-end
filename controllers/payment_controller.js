
async function verifyPayment(req, res) {
    console.log('Received callback:', req.body);
        res.status(200);
    
  }

  module.exports = {verifyPayment};