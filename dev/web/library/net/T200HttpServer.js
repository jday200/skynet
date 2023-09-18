const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');



class T200HttpServer {
    constructor() {
        this.setup = new T200HttpSetup();
    }

    start(callback) {
        let server = http.createServer(function(req, res){
            let HttpDispatcher = new T200HttpDispatcher();

            HttpDispatcher.run(req, res);
        });

        server.listen(this.setup.port);

        callback();
    }
}

module.exports = T200HttpServer;