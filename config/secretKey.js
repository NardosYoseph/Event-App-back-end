const forge = require('node-forge');

const privateKey = forge.pki.rsa.generateKeyPair({ bits: 2048 });
const secretKey = forge.pki.privateKeyToPem(privateKey.privateKey);

// Export the PEM-encoded key
module.exports = {
  secretKey,
};