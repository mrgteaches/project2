let express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    path = require('path'),
    app = express(),
    port = 8000,
    routes = require('./config/routes.js');

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json()); // parse form data client
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});

routes(app);

