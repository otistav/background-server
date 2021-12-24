const Image = require('../db/models/image');

exports.createImage = async (filename, user_id, processed_filename) => {
  try {
    const image = new Image({ filename, user_id, processed_filename });
    await image.save();
    return image;
  } catch (error) {
    throw error;
  }
}

exports.getUnprocessedImages = async () => {
  return (await Image.find({ processed: false }));
}