const T200HttpServer = require('../library/net/T200HttpServer.js');

let HttpServer = new T200HttpServer();

global.setup.http.port = 8888;

HttpServer.start(function(){
    console.log('start success');
});
