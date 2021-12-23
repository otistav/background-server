const imageService = require('../services/imageService');
const axios = require('axios');
const fs = require('fs');

exports.load = async (req, res, next) => {
  try {
    const image = await imageService.createImage(req.file.filename, req.body.user_id);
    const data = await axios.post('http://python:5000/image', { filename: req.file.filename });
    fs.writeFile(`../uploads/processed_${req.file.filename}`, data.data, err => {
      if (err) {
        console.log(err, 'error');
        res.send(error);
        return
      }
      res.send(image);
    })
  } catch (error) {
    console.log(error, 'error11')
    res.send(error);
  }
}