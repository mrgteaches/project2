var db = require("../models");

module.exports = function (app) {

  //Routers based on the method
  app.get('/', function (req, res) {
    res.render("index")
  });

  app.get('/index', function (req, res) {
    res.render("index")
  });

  app.get("/flashcards", function (req, res) {
    db.Terms.findAll({}).then(function(data){
      res.render("flashcard", {Terms:data});
    })
  });

  app.get("/hangman", function (req, res) {
    res.render("hangman")
  });

  app.post("/", function (req, res) {
    console.log(req.body);

    if (typeof (req.body.term) === "object") {
      for (var i = 0; i < req.body.term.length; i++) {
        db.Terms.create({
          term: req.body.term[i],
          definition: req.body.definition[i],
        });
        // .then(function(data) {
        // });
      }
      res.render("index");
    } else {
      db.Terms.create({
        term: req.body.term,
        definition: req.body.definition,
      })
        .then(function (data) {
          res.render("index");
        });
    }
  });
};