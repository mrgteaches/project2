var db = require("../models");

module.exports = function (app) {

    //Routers based on the method
    app.get('/', function(req,res){
      res.render("index")
    });

    app.get("/flashcards", function(req, res) {
      res.render("flashcard")
      });

    app.get("/hangman", function(req,res) {
      res.render("hangman")
    });

    app.post("/", function(req, res) {
      console.log(req.body);
      db.Terms.create({
        term: req.body.term,
        definition: req.body.definition,
      })
        .then(function(data) {
          res.render("index");
        });
    });
};