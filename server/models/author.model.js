const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;