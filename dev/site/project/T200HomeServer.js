const T200HomeSetup = require('./T200HomeSetup.js');
const T200HomeDBSetup = require('./store/T200HomeDBSetup.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Database = require('../library/db/T200Database.js');
const T200HttpResource = require('../library/net/T200HttpResource.js');
const T200HttpServer = require('../library/net/T200HttpServer.js');

class T200HomeServer extends T200HttpServer {
    constructor() {
        super();
        global.setup.http = new T200HomeSetup();
        global.setup.database = new T200HomeDBSetup();
    }

    start() {
        let self = this;

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
        let self = this;
        let promise = new Promise(function(resolve, reject){
            Promise.all([self.load_db(), self.load_app()]).then(resolve, reject);
        });

        return promise;
    }

    load_db() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            var database = new T200Database();

            database.start().then(function(){
                global.database = database;
                if(resolve)resolve();
            }, function(){
                if(reject)reject();
            });
        });

        return promise;
    }

    load_app() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let resource = new T200HttpResource();
            let name = resource.merge_app();

            resource.exists(name).then(function(){
                return resource.load_action(name);
            }, function(){

            }).then(function(){
                if(resolve)resolve();
            }, function(){
                if(reject)reject();
            });
        });

        return promise;
    }
}

module.exports = T200HomeServer;