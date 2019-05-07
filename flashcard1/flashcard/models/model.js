'use strict';
var connection = require('../config/connection.js');

//Declare an object
var Term = function(term){
    this.term = term.term;
    this.definition = term.definition;
};


/*
 * Method name selectAll
 * @parameters result as function
 * This function will be called to select all data from terms table
 * */

Term.selectAll = function selectAll(result){
    //select query
    connection.query("SELECT * FROM `terms`", (err, res) => {
        if(err){
            console.log("error: ", err);
        }
        result(res);
    });
};

/*
 * Method name insertOne
 * @parameters newTerm as object and result as function
 * This function will be called with the data inserted by user.
 * */
Term.insertOne = function insertOne(newTerm, result){
    //Insert query
    connection.query("INSERT INTO `terms` set ?", newTerm, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Term;