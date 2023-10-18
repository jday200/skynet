const { log, log_start, log_stop } = require('../library/lib.js');
const mariadb = require('mariadb');

log_start("test promise");

let pool = mariadb.createPool({host:'localhost', port:3306,
            database:'home', user:'home', password:'home123'});

let connect;

pool.getConnection().then(function(conn){
    connect = conn;
    log(__filename, "connect success");
    return connect.query('select * from per1son');
}, function(){
    log(__filename, "connect failure");
    return error();
}).then(function(){
    log(__filename, "query success");
    return connect.end();
}, function(){
    log(__filename, "query failure");
    return connect.end();
}).then(function(){
    log(__filename, "disconnect success");
    return pool.end();
}, function(){
    log(__filename, "disconnect failure");
    return pool.end();
}).then(function(){
    log(__filename, "end success");
}, function(){
    log(__filename, "end failure");
});

log_stop("test promise");