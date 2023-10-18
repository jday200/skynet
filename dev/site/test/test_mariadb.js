const { log, log_start, log_stop } = require('../library/lib.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Mariadb = require('../library/db/T200Mariadb.js');

log_start("test mariadb");

let setup = new T200DBSetup();
let mariadb = new T200Mariadb();

setup.database = "home";
setup.user = "home";
setup.password = "home123";

mariadb.start(setup).then(function(){
    log(__filename, "start success");
    return mariadb.connect();
}, function(){
    log(__filename, "start failure");
    return error();
}).then(function(){
    log(__filename, "connect success");
    let sql = "select * from person";
    return mariadb.query(sql);
}, function(){
    log(__filename, "connect failure");
    return error();
}).then(function(){
    log(__filename, "query success");
    return mariadb.disconnect();
}, function(){
    log(__filename, "query failure");
    return mariadb.disconnect();
}).then(function(){
    log(__filename, "disconnect success");
    return mariadb.stop();
}, function(){
    log(__filename, "disconnect failure");
    return error();
}).then(function(){
    log(__filename, "stop success");
}, function(){
    log(__filename, "stop failure");
});

log_stop("test mariadb");