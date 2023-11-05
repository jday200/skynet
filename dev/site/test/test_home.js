const T200Error = require('../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../library/T200Lib.js');

const T200HomeServer = require('../project/T200HomeServer.js');


log_start(__filename, "test home server");

let HomeServer = new T200HomeServer();

HomeServer.start().then(function(){
    log(__filename, "Home Server start success");
}, function(err){
    log(__filename, "Home Server start failure", err);
});

log_stop(__filename, "test home server");