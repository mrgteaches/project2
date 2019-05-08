'user strict';

var Term = require('../models/model.js');

/*
 * Method name list
 * @parameters req and res
 * This function will be called from controller. this will call SelectAll method of omr
 * render html based on the selected data
 * */

exports.home = function(req, res) {
    Term.selectAll(function(terms) {
        res.render('index',{title:'Flash App',terms:terms});
    });
};

exports.insert = function(req,res){
    let terms = req.body;
    if(Array.isArray(terms.term)){
        for(let ind in terms.term) {
            let term = {
                term:terms.term[ind],
                definition:terms.definition[ind]
            }
            Term.insertOne(term, function () {

             });

        }
    }else{
        let term = {
            term:terms.term,
            definition:terms.definition
        }
        Term.insertOne(term, function () {

        });
    }

    res.redirect('/');
};
