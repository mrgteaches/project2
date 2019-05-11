var db = require("../models");

module.exports = function (app) {

  //HTML Routes
  app.get('/', function (req, res) {
    res.render("index")
  });

  app.get('/index', function (req, res) {
    res.render("index")
  });

  app.get("/hangman", function (req, res) {
    db.Terms.findOne({}).then(function(data){
      res.render("hangman", {Terms:data})
    })
    
  });

  app.get("/flashcards", function (req, res) {
    db.Terms.findAll({}).then(function(data){
      res.render("flashcard", {Terms:data})
    })
  });


  //API Routes
  app.get("/api", function (req, res) {
    db.Terms.findAll({}).then(function(data){
      res.json(data);
    })
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

  app.delete("/api", function(req,res) {
    db.Terms.destroy({
      where: {}
    }).then(function(data){
      res.json(data);
    })
  })
};