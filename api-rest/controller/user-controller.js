'use strict'

const mysql = require('mysql');
const dbConnection = require('../dbConnection');


exports.post = (req, res, next)=> {

    var dataUser = req.body;
    var sql = 'SELECT * FROM user WHERE username = ? and password = ?';

    dbConnection.query(sql, [dataUser], function(err, result, fields){

        if(err) throw err;

    console.log("Usuário!", dataUser);
    res.status(200);
    })
}