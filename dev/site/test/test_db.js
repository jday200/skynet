const { log, log_start, log_stop } = require('../library/lib.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Database = require('../library/db/T200Database.js');

log_start("test database");

let setup = new T200DBSetup();
let database = new T200Database();

database.setup.database = "home";
database.setup.user = "home";
database.setup.password = "home123";

database.start(setup).then(function(){
    log(__filename, "start success");
    return database.connect();
}, function(){
    log(__filename, "start failure");
    return error();
}).then(function(){
    log(__filename, "connect success");
    let sql = "select * from person";
    return database.query(sql);
}, function(){
    log(__filename, "connect failure");
    return error();
}).then(function(){
    log(__filename, "query success");
    return database.disconnect();
}, function(){
    log(__filename, "query failure");
    return database.disconnect();
}).then(function(){
    log(__filename, "disconnect success");
    return database.stop();
}, function(){
    log(__filename, "disconnect failure");
    return error();
}).then(function(){
    log(__filename, "stop success");
}, function(){
    log(__filename, "stop failure");
});

log_stop("test database");