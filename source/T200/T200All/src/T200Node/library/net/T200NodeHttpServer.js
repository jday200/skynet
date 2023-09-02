var http = require('http');

class T200NodeHttpServer {
    constructor() {
        
    }

    start() {
        console.log("starting...");
        var server = http.createServer(function(req, res) {
            res.writeHeader(200, {'Content-Type':'text/plain'})
            res.end('T200Node')
        }).listen(8888);
    }
}

module.exports = T200NodeHttpServer;