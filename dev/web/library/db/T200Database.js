const { log } = require('../lib.js');
const T200Error = require('../T200Error.js');
const T200DBSetup = require('./T200DBSetup.js');


class T200Database {
    constructor() {
        this.setup = new T200DBSetup();
    }

    start() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){

            }else{
                reject(T200Error.build(1));
                return;
            }

            switch(self.setup.type){
                case 'mariadb':
                    log(__filename, "mariadb");

                    const T200Mariadb = require('./T200Mariadb.js');
                    self.database = new T200Mariadb();
                    self.database.start(self.setup).then(resolve, reject);
                    break;
            }
        });

        return promise;
    }

    stop() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.stop().then(resolve, reject);
            }
        });

        return promise;
    }

    connect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.connect().then(resolve, reject);
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.disconnect().then(resolve, reject);
            }
        });

        return promise;
    }

    query(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.query(sql).then(resolve, reject);
            }
        });

        return promise;
    }

    execute(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.execute(sql).then(resolve, reject);
            }
        });

        return promise;
    }

    begin() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.begin().then(resolve, reject);
            }
        });

        return promise;
    }

    end() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build(1));
            }else{
                self.database.end().then(resolve, reject);
            }
        });

        return promise;
    }
}

module.exports = T200Database;