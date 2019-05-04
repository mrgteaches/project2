'user strict';

var mysql = require('mysql');

//mysql db connection
var connection = mysql.createConnection({
    host: 'localhost', // host name
    user: 'root', // Database user name
    password: 'project2',// database password
    database: 'flashcard_db' // database name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
