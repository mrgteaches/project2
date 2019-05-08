var path = require("path");

'use strict';
module.exports = function (app) {
    let Controller = require('../controllers/app_controller.js');

    //Routers based on the method
    app.get('/',Controller.home);

    app.post('/',Controller.insert);

    app.get("/flashcards", function(req, res) {
        res.render("flashcard")
      });
};