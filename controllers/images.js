const imageService = require('../services/imageService');
const axios = require('axios');

exports.load = async (req, res, next) => {
  try {
    const filename = `${req.file.filename.split('.').slice(0, -1).join('.')}.png`
    const image = await imageService.createImage(filename, req.body.user_id);
    await axios.post('http://python:5000/image', { filename: req.file.filename });
    res.send(image);
  } catch (error) {
    console.log(error, 'error11')
    res.send(error);
  }
}