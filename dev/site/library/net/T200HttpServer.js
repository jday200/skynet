const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');
const T200DBSetup = require('../db/T200DBSetup.js');


class T200HttpServer {
    constructor() {
        global.setup = {};
        global.setup.http = new T200HttpSetup();
        global.setup.database = new T200DBSetup();
    }

    start(callback) {
        let self = this;

        this.run().then(function(){
    
        }, function(){

        });
    }

    run() {
        let self = this;

        let promise = new Promise(function(){
            let server = http.createServer(function(req, res){
                let HttpDispatcher = new T200HttpDispatcher();

                HttpDispatcher.run(req, res);
            });

            server.listen(global.setup.http.port);
            
        });

        return promise;
    }
}

module.exports = T200HttpServer;