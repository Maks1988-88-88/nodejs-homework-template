const multer = require("multer");
const path = require("path");

const tempPath = path.join(__dirname, "../", "temp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;


;