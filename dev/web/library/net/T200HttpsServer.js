const { error, log } = require('../T200Lib.js');
const T200Error = require('../T200Error.js');

const http = require('http');


class T200HttpsServer {
    constructor() {

    }

    start() {
        let self = this;
        return self.run();
    }

    stop() {

    }

    run() {
        let self = this;
        let promise = new Promise(function(){
            let server = http.createServer();

            server.on('request', function(req, res){
                console.log('request');
            });

            server.listen(8888);
        });

        return promise;
    }

}

module.exports = T200HttpsServer;