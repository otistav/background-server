const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    filename: String,
    user_id: String,
    processed: {
        type: Boolean,
        default: false,
    },
    processed_filename: String
});

const image = mongoose.model('image', imageSchema);

module.exports = image;