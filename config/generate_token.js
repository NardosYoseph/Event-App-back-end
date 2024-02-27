const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey');
function generateToken(user) {
  const payload = { user };
  return jwt.sign(payload, secretKey,{ expiresIn: '12h' });
}
// jwt.verify(token, secretKey, (err, decoded) => {
//   if (err) {
//     console.error('JWT verification failed:', err.message);
//   } else {
//     console.log('JWT verified successfully:', decoded);
//   }
// });
module.exports = {
    generateToken,
  };