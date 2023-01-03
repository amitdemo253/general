const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'file-storage');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});
export const upload =()=> multer({ storage: storage });
