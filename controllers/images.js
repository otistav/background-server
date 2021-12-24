const imageService = require('../services/imageService');
const axios = require('axios');

exports.load = async (req, res, next) => {
  try {
    const unprocessed_images = await imageService.getUnprocessedImages();
    const processed_filename = `processed_${req.file.filename.split('.').slice(0, -1).join('.')}.png`
    const image = await imageService.createImage(req.file.filename, req.body.user_id, processed_filename);
    if (unprocessed_images.length === 0) {
      axios.post(`http://${req.headers.host}:5000/image`, { filename: req.file.filename });
    }
    res.send(image);
  } catch (error) {
    console.log(error, 'error11')
    res.send(error);
  }
}