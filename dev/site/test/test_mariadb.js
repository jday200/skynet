const { error } = require('../library/error.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Mariadb = require('../library/db/T200Mariadb.js');

let setup = new T200DBSetup();
let mariadb = new T200Mariadb();

setup.database = "home";
setup.user = "home";
setup.password = "home123";

mariadb.start(setup).then(function(){
    console.log('start success');
    return mariadb.connect();
}, function(){
    console.log('start failure');
    return error();
}).then(function(){
    console.log('connect success');
    let sql;
    sql = "select * from person";
    return mariadb.query(sql);
}, function(){
    console.log('connect failure');
    return error();
}).then(function(){
    console.log('query success');
    return mariadb.disconnect();
}, function(){
    console.log('query failure');
    return mariadb.disconnect();
}).then(function(){
    console.log('disconnect success');
    return mariadb.stop();
}, function(){
    console.log('disconnect failure');
    return error();
}).then(function(){
    console.log('stop success');
}, function(){
    console.log('stop failure');
});