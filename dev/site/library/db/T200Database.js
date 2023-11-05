const { log } = require('../T200Lib.js');
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
                reject(T200Error.build());
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
                reject(T200Error.build());
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
                reject(T200Error.build());
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
                reject(T200Error.build());
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
                reject(T200Error.build());
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
                reject(T200Error.build());
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
                reject(T200Error.build());
            }else{
                self.database.begin().then(resolve, reject);
            }
        });

        return promise;
    }


    commit() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build());
            }else{
                self.database.commit().then(resolve, reject);
            }
        });

        return promise;
    }


    rollback() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                reject(T200Error.build());
            }else{
                self.database.rollback().then(resolve, reject);
            }
        });

        return promise;
    }
}

module.exports = T200Database;