'use strict'

const mysql = require('mysql');
const dbConnection = require('../dbConnection');


exports.post = (req, res, next)=> {

    var dataPerson = req.body;
    var sql = 'INSERT INTO person SET ?';

    dbConnection.query(sql, [dataPerson], function(err, result, fields){

        if(err) throw err;

    console.log("Estudante inserido com sucesso!", dataPerson);
    res.send(result);
    })
}

exports.get = (req, res, next)=>{

    var sql = 'SELECT * FROM person';

    dbConnection.query(sql, function(err, result, fields){
        if(err) throw err;

    console.log("todos aqui");
    res.send(result);
    })
}

exports.put = (req, res, next) =>{

    var idPerson = req.params.id;
    var dataPerson = req.body;
    var sql = "UPDATE person SET ? WHERE id=?";

    dbConnection.query(sql, [dataPerson,idPerson],function(err, result, fields){
        if(err) throw err;

    console.log("Estudante atualizado com sucesso!");
    res.send(result);
    });
}

exports.delete = (req, res, next)=>{
    
    var idPerson = req.params.id;

    var sql = 'DELETE FROM person WHERE id = ?';

    dbConnection.query(sql, idPerson, function(err, result, fields){
        if(err) throw err;
        
    console.log("Estudante excluído");
    res.send(result);

    })
}