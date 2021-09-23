const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://projetocarro:carro@cluster0.7ataw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;