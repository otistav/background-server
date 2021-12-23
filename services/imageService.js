const Image = require('../db/models/image');

exports.createImage = async (filename, user_id) => {
  try {
    const image = new Image({ filename, user_id });
    await image.save();
    return image;
  } catch (error) {
    throw error;
  }
}