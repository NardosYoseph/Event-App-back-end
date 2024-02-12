const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey');
function generateToken(user) {
  const payload = { user };
  return jwt.sign(payload, secretKey,{ expiresIn: '5h' });
}

module.exports = {
    generateToken,
  };