const mongoose = require('mongoose');



module.exports = {
    connect: cb => {
        mongoose.connect('mongodb://mongo_container:27017/test', cb);
    },
    
}