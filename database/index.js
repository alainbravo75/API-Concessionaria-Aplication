const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/carros', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;