const { error } = require('../library/error.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Database = require('../library/db/T200Database.js');

let setup = new T200DBSetup();
let database = new T200Database();

database.setup.database = "home";
database.setup.user = "home";
database.setup.password = "home123";

database.start(setup).then(function(){
    console.log('start success');
    return database.connect();
}, function(){
    console.log('start failure');
    return error();
}).then(function(){
    console.log('connect success');
    let sql;
    sql = "select * from person";
    return database.query(sql);
}, function(){
    console.log('connect failure');
    return error();
}).then(function(){
    console.log('query success');
    return database.disconnect();
}, function(){
    console.log('query failure');
    return database.disconnect();
}).then(function(){
    console.log('disconnect success');
    return database.stop();
}, function(){
    console.log('disconnect failure');
    return error();
}).then(function(){
    console.log('stop success');
}, function(){
    console.log('stop failure');
});