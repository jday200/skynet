const T200Error = require('../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../library/lib.js');
const T200HttpsSetup = require('../library/net/T200HttpsSetup.js');
const T200HttpsServer = require('../library/net/T200HttpsServer.js');

log_start(__filename, "test https server");

let HttpsServer = new T200HttpsServer();

global.setup.https.port = 8888;

HttpsServer.start().then(function(){
    log(__filename, "Https Server start success");
}, function(err){
    log(__filename, "Https Server start failure", err.msg);
});

log_stop(__filename, "test https server");