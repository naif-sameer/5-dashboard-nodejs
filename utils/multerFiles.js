const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const randomNumber = Math.round(Math.random() * 1e9);
    const uniqueSuffix = `${Date.now()}-${randomNumber}`;

    // change to array and give us the last item in the array :)
    const fileNameArr = file.originalname.split('.');
    const fileType = fileNameArr[fileNameArr.length - 1];

    cb(null, `${uniqueSuffix}.${fileType}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
