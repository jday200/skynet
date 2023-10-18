const { log, log_start, log_stop } = require('../library/lib.js');
const T200HomeServer = require('../project/T200HomeServer.js');

log_start("test home");

let HomeServer = new T200HomeServer();
    
HomeServer.start().then(function(){
    log(__filename, "Home server start success");
}, function(){
    log(__filename, "Home server start failure");
});

log_stop("test home");