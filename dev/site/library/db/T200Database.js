const T200DBSetup = require('./T200DBSetup.js');

class T200Database {
    constructor() {
        this.setup = new T200DBSetup();
    }

    start() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            console.log(self.setup);
            console.log(self.database);

            if(undefined == self.database){

            }else{
                if(reject)reject("start error");
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
                if(reject)reject("stop error");
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
                if(reject)reject("database is null");
            }else{
                console.log(self.database);
                self.database.connect().then(resolve, reject);
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.database){
                if(reject)reject("database is null");
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
                if(reject)reject("query error");
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
                if(reject)reject("execute error");
            }else{
                self.database.execute(sql).then(resolve, reject);
            }
        });

        return promise;
    }
}

module.exports = T200Database;