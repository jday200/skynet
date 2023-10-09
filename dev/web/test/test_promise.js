const {error} = require('../library/error.js');
const mariadb = require('mariadb');

let pool = mariadb.createPool({host:'localhost', port:3306,
            database:'home', user:'home', password:'home123'});

let connect;

pool.getConnection().then(function(conn){
    connect = conn;
    console.log('connect success');
    return conn.query('select * from per1son');
}, function(){
    console.log('connect failure');
    return error();
}).then(function(){
    console.log('query success');
    return connect.end();
}, function(){
    console.log('query failure');
    return connect.end();
}).then(function(){
    console.log('disconnect success');
    return pool.end();
}, function(){
    console.log('disconnect failure');
    return pool.end();
}).then(function(){
    console.log('end success');
}, function(){
    console.log('end failure');
});




