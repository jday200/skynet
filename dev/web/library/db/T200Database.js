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
                if(reject)reject("database start error");
                return;
            }

            switch(self.setup.type){
                case 'mariadb':
                    console.log('mariadb');

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
                if(reject)reject("database stop error");
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
                if(reject)reject("database connect error")
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
                if(reject)reject("database disconnect error");
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
                if(reject)reject("database query error");
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
                if(reject)reject("database execute error");
            }else{
                self.database.execute(sql).then(resolve, reject);
            }
        });

        return promise;
    }
}

module.exports = T200Database;