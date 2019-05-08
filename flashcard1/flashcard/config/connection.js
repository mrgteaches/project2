'user strict';

var mysql = require('mysql');

//nodemonmysql db connection
var connection = mysql.createConnection({
    host: 'localhost', //Your host name
    user: 'root', //Your Database user name
    password: 'J@m3s005',//Your database password
    database: 'flashcard_db' //Your database name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
