const http = require('http');
const T200HttpsDispatcher = require('./T200HttpsDispatcher.js');


class T200HttpsServer {
    constructor() {

    }

    start() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.run().then(resolve, reject);
        });

        return promise;
    }

    stop() {

    }

    run() {
        let self = this;
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
            server.listen(8888, function(){
                console.log('http server start success');
                resolve();
            });
        });

        return promise;
    }
}

module.exports = T200HttpsServer;