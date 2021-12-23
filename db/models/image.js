const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    filename: String,
    user_id: String,
    processed: {
        type: Boolean,
        default: false,
    }
});

const image = mongoose.model('image', imageSchema);

module.exports = image;