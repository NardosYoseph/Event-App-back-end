const multer = require('multer');
const express = require('express');

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); }
  });
    const fileFilter = (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
      }
      
      if (file.size > 1024 * 1024 * 5) { 
        return cb(new Error('File size exceeds the limit (5MB)!'), false);
      }
      cb(null, true);
   }
   app.use(express.urlencoded({ extended: true }));
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
}).single('image'); 
module.exports=upload;