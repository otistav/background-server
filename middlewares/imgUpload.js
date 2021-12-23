const multer = require('multer');
const { getRandomId } = require('../utils/misc');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}_image_${getRandomId(15)}.${file.mimetype.split('/')[1]}`
      cb(null, filename);
    }
  })
const upload = multer({ storage });

exports.single = upload.single('image');

exports.multiple = upload.array('images', 10);
