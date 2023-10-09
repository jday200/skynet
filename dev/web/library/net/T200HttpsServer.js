const http = require('http');
const T200HttpsSetup = require('./T200HttpsSetup.js');
const T200HttpsAction = require('./T200HttpsAction.js');
const T200HttpsSession = require('./T200HttpsSession.js');
const T200HttpsDispatcher = require('./T200HttpsDispatcher.js');


class T200HttpsServer {
    constructor() {
        global.setup = {};
        global.setup.https = new T200HttpsSetup();
    }

    start() {
        let self = this;

        global.action = new T200HttpsAction();

        let promise = new Promise(function(resolve, reject){
            self.run().then(resolve, reject);
        });

        return promise;
    }

    stop() {
        let self = this;
        let promise = new Promise(function(resolve, reject){

        });

        return promise;
    }

    run() {
        let self = this;

        T200HttpsSession.clear();

        let promise = new Promise(function(resolve, reject){
            let server = http.createServer(function(req, res){
                new Promise(function(resolve, reject){
                    let HttpsDispatcher = new T200HttpsDispatcher();

                    HttpsDispatcher.run(req, res).then(function(){
                        console.log('dispatcher run success');
                    }, function(err){
                        console.log(err);
                        console.log('dispatcher run failure');
                    });
                }).then(function(){
                    console.log('success');
                }, function(err){
                    console.log(err);
                });
            });
            server.listen(global.setup.https.port, function(){
                console.log('https server start success');
                resolve();
            });
        });

        return promise;
    }
}

module.exports = T200HttpsServer;