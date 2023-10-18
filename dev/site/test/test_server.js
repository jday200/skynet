const { log, log_start, log_stop } = require('../library/lib.js');
const T200HttpsServer = require('../library/net/T200HttpsServer.js');

log_start("test server");

let HttpsServer = new T200HttpsServer();

global.setup.https.port = 8888;

HttpsServer.start().then(function(){
    log(__filename, "start success");
}, function(){
    log(__filename, "start failure");
});

log_stop("test server");