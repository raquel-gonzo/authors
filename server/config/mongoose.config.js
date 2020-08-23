const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then(() => console.log('Database is connected.'))
    .catch(err => console.log('Error: ', err));