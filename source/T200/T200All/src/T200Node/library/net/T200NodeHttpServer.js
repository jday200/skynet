var http = require('http');

const T200NodeHttpDispatcher = require('./T200NodeHttpDispatcher.js');

class T200NodeHttpServer {
    constructor() {
        
    }

    start() {
        console.log("starting...");
        var server = http.createServer(function(req, res) {
            res.writeHeader(200, {'Content-Type':'text/plain'})
            res.end('T200Node');

            var HttpDispatcher = new T200NodeHttpDispatcher();

            HttpDispatcher.run(req, res);

        }).listen(8888);
    }
}

module.exports = T200NodeHttpServer;