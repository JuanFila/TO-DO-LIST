const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/to-do-list')
    .then(() => console.log('Conectando ao mongoDB'))
    .catch((err) => conmsole.log(err))