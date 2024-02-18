const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/'); // Set the destination folder for storing uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); }
  });
    const fileFilter = (req, file, cb) => {
      // Check file type
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
      }
      // Check file size (in bytes)
      if (file.size > 1024 * 1024 * 5) { // 5 MB limit
        return cb(new Error('File size exceeds the limit (5MB)!'), false);
      }
      // Accept the file
      cb(null, true);// Generate a unique filename
   }
//
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
}).single('image'); // 'image' is the field name in the form data

module.exports=upload;