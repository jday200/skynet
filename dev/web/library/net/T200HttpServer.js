const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');
const T200HttpDispatcher = require('./T200HttpDispatcher.js');


class T200HttpServer {
    constructor() {
        global.setup = {};
        global.setup.http = new T200HttpSetup();
    }

    start(callback) {
        let server = http.createServer(function(req, res){
            let HttpDispatcher = new T200HttpDispatcher();

            HttpDispatcher.run(req, res);
        });

        server.listen(global.setup.http.port);

        if(callback)callback();
    }
}

module.exports = T200HttpServer;