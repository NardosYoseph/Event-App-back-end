const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex'); 
function generateToken(userId) {
  const payload = { userId };
  return jwt.sign(payload, secretKey,{ expiresIn: '5h' });
}

module.exports = {
    generateToken,
  };