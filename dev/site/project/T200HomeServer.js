const { log, log_start, log_stop } = require('../library/lib.js');

const T200HomeSetup = require('./T200HomeSetup.js');
const T200HomeDBSetup = require('./store/T200HomeDBSetup.js');
const T200Database = require('../library/db/T200Database.js');
const T200HttpsAction = require('../library/net/T200HttpsAction.js');
const T200HttpsResource = require('../library/net/T200HttpsResource.js');
const T200HttpsServer = require('../library/net/T200HttpsServer.js');

class T200HomeServer extends T200HttpsServer {
    constructor() {
        super();
        global.setup.https = new T200HomeSetup();
        global.setup.database = new T200HomeDBSetup();
    }

    start() {
        log(__filename, "start");

        let self = this;

        global.action = new T200HttpsAction();
        this.resource = new T200HttpsResource();

        let promise = new Promise(function(resolve, reject){
            self.load().then(function(){
                self.run().then(resolve, reject);
            }, function(err){
                if(reject)reject(err);
            });
        });

        return promise;
    }

    load() {
        log(__filename, "load");

        let self = this;
        let promise = new Promise(function(resolve, reject){
            Promise.all( [self.load_db(), self.load_app()] ).then(resolve, reject);
        });

        return promise;
    }

    load_db() {
        log(__filename, "load_db");

        let self = this;
        let promise = new Promise(function(resolve, reject){
            var database = new T200Database();

            database.setup = new T200HomeDBSetup();

            database.start().then(function(){
                global.database = database;
                if(resolve)resolve();
            }, function(err){
                if(reject)reject(err);
            });
        });

        return promise;
    }

    load_app() {
        log(__filename, "load_app");

        let self = this;
        let promise = new Promise(function(resolve, reject){
            let name = self.resource.merge_app();

            self.resource.exists(name).then(function(){
                let result = self.resource.load_action(name);
                if(result){
                    if(resolve)resolve();
                }else{
                    if(reject)reject("load action error");
                };
            }, function(err){
                if(reject)reject(err);
            });
        });

        return promise;
    }
}

module.exports = T200HomeServer;