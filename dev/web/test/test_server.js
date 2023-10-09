const T200HttpsServer = require('../library/net/T200HttpsServer.js');

let HttpsServer = new T200HttpsServer();

global.setup.https.port = 8888;

HttpsServer.start().then(function(){
    console.log('start success');
}, function(){
    console.log('start failure');
});
