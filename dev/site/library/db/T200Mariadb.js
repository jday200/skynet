const T200Error = require('../T200Error.js');
const mariadb = require('mariadb');


class T200Mariadb {
    constructor() {

    }

    start(setup) {
        let self = this;
        let flag = false;

        if(undefined == this.pool){
            flag = true;
            this.pool = mariadb.createPool(setup);
            this.setup = setup;
        } 
        
        let promise = new Promise(function(resolve, reject){
            if(flag){
                resolve()
            }else{
                reject(T200Error.build());
            }
        });

        return promise;
    }

    stop() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.pool){
                reject(T200Error.build());
            }else{
                self.pool.end().then(resolve, reject);
            }
        });

        return promise;
    }

    connect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.pool){
                reject(T200Error.build());
            }else{
                self.pool.getConnection().then(function(conn){
                    self._conn = conn;
                    resolve();
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self._conn){
                reject(T200Error.build());
            }else{
                self._conn.end().then(function(){
                    delete self._conn;
                    resolve();
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }

    query(sql) {
        let self = this
        let promise = new Promise(function(resolve, reject){
            if(undefined == self._conn){
                reject(T200Error.build());
            }else{
                self._conn.query(sql).then(function(data){
                    resolve(data);
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }

    execute(sql) {
        let self = this
        let promise = new Promise(function(resolve, reject){
            if(undefined == self._conn){
                reject(T200Error.build());
            }else{
                self._conn.query(sql).then(function(data){
                    let result = false;

                    if(data && 0 == data.warningStatus){
                        result = true;
                    }
                    resolve(result);
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }

    begin() {
        let self = this
        let promise = new Promise(function(resolve, reject){
            if(undefined == self._conn){
                reject(T200Error.build());
            }else{
                self._conn.beginTransaction().then(function(){
                    resolve();
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }

    commit() {
        let self = this
        let promise = new Promise(function(resolve, reject){
            if(undefined == self._conn){
                reject(T200Error.build());
            }else{
                self._conn.commit().then(function(){
                    resolve();
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }

    rollback() {
        let self = this
        let promise = new Promise(function(resolve, reject){
            if(undefined == self._conn){
                reject(T200Error.build());
            }else{
                self._conn.rollback().then(function(){
                    resolve();
                }, function(err){
                    reject(T200Error.build());
                });
            }
        });

        return promise;
    }
}

module.exports = T200Mariadb;