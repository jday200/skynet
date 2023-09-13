const http = require('http');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpDispatcher = require('./T200HttpDispatcher.js');


class T200HttpServer {
    constructor() {

    }

    start() {
        console.log('starting...');
        
        var HttpRequest = new T200HttpRequest();

        global.actions = HttpRequest;

        var server = http.createServer(function(req, res) {
            var HttpDispatcher = new T200HttpDispatcher();
            
            HttpDispatcher.run(req, res);
        });

        server.listen(8888);
    }
}

module.exports = T200HttpServer;