const imageService = require('../services/imageService');

exports.load = async (req, res, next) => {
  try {
    const image = await imageService.createImage(req.file.filename, req.body.user_id)
    res.send(image);
  } catch (error) {
    res.send(error);
  }
}