const { log, log_start, log_stop } = require('./library/lib.js');
const T200HomeServer = require('./project/T200HomeServer.js');

log_start(__filename);

let HomeServer = new T200HomeServer();

HomeServer.start().then(function(){
    log('HomeServer start success');
}, function(){
    log('HomeServer start failure');
});

log_stop(__filename);