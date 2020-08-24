const AuthorController = require("../controllers/author.controller");
const Author = require("../models/author.model");

// express http requests
module.exports = app => {
    app.get("/api/authors/", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.put("/api/authors/update/:id", AuthorController.updateAuthor);
    app.post("/api/authors/new", AuthorController.createAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}