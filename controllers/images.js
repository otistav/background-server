const imageService = require('../services/imageService');
const axios = require('axios');

exports.load = async (req, res, next) => {
  try {
    const image = await imageService.createImage(req.file.filename, req.body.user_id);
    const data = await axios.post('http://python:5000/image', { filename: req.file.filename });

    res.send(data);
  } catch (error) {
    res.send(error);
  }
}