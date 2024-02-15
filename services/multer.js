const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/'); // Set the destination folder for storing uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Generate a unique filename
  }
});

const upload = multer({ storage: storage }).single('image');
module.exports=upload;