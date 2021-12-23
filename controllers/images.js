const imageService = require('../services/imageService');
const axios = require('axios');

exports.load = async (req, res, next) => {
  try {
    const image = await imageService.createImage(req.file.filename, req.body.user_id);
    await axios.post('http://python:5000/image', { filename: req.file.filename });
    res.send(image);
  } catch (error) {
    console.log(error, 'error11')
    res.send(error);
  }
}