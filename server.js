var express = require('express');
var db = require("./models");

var PORT = process.env.PORT || 8000;
var app = express();
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var routes = require('./config/routes.js');

app.set('port', PORT); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json()); // parse form data client
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

routes(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});


