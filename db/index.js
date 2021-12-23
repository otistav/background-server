const mongoose = require('mongoose');



module.exports = {
    connect: cb => {
        mongoose.connect('mongodb://localhost:27017/test', cb);
    },
    
}