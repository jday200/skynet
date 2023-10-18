const { log, log_start, log_stop } = require('../lib.js');
const http = require('http');

const T200HttpsSetup = require('./T200HttpsSetup.js');
const T200HttpsAction = require('./T200HttpsAction.js');
const T200HttpsSession = require('./T200HttpsSession.js');
const T200HttpsResource = require('./T200HttpsResource.js');
const T200HttpsDispatcher = require('./T200HttpsDispatcher.js');

class T200HttpsServer {
    constructor() {
        global.setup = {};
        global.setup.https = new T200HttpsSetup();
    }

    start() {
        let self = this;

        log(__filename, "start");

        global.action = new T200HttpsAction();
        this.resource = new T200HttpsResource();

        let promise = new Promise(function(resolve, reject){
            self.run().then(resolve, reject);
        });

        return promise;
    }

    stop() {
        let self = this;

        log(__filename, "stop");

        let promise = new Promise(function(resolve, reject){

        });

        return promise;
    }

    run() {
        log(__filename, "run");

        let self = this;

        T200HttpsSession.clear();

        let promise = new Promise(function(resolve, reject){
            let server = http.createServer(function(req, res){
                log(__filename, "T200HttpsServer run");
                let dispatcher = new T200HttpsDispatcher();
                dispatcher.resource = self.resource;

                dispatcher.run(req, res).then(function(){
                    log(__filename, "dispatcher run success");
                }, function(){
                    log(__filename, "dispatcher run failure");
                }).catch(function(){
                    log(__filename, "dispatcher run error");
                });
            });

            server.listen(8888, function(){
                log('T200HttpsServer run listen');
                resolve();
            });
        });

        return promise;
    }
}

module.exports = T200HttpsServer;