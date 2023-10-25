const mariadb = require('mariadb');
const T200Error = require('../T200Error.js');


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
                resolve();
            }else{
                reject(T200Error.build(1));
            }
        });

        return promise;
    }

    stop() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.pool){
                reject(T200Error.build(2));
            }else{
                self.pool.end();
                resolve();
            }
        });

        return promise;
    }

    connect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.pool){
                reject(T200Error.build(3));
            }else{
                self.pool.getConnection().then(function(conn){
                    self.conn = conn;
                    resolve();
                }, function(err){
                    reject(T200Error.build(5, err));
                });
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.conn){
                reject(T200Error.build(6));
            }else{
                self.conn.end().then(function(){
                    delete self.conn;
                    resolve();
                }, function(err){
                    reject(T200Error.build(6, err));
                });
            }
        });

        return promise;
    }

    query(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.conn){
                reject(T200Error.build(5));
            }else{
                self.conn.query(sql).then(function(data){
                    resolve(data);
                }, function(err){
                    reject(T200Error.build(6, err));
                });
            }
        });

        return promise;
    }

    execute(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.conn){
                reject(T200Error.build(5));
            }else{
                self.conn.query(sql).then(function(data){
                    let result = false;

                    if(data && 0 == data.warningStatus){
                        result = true;
                    }
                    resolve(result);
                }, function(err){
                    reject(T200Error.build(6, err));
                });
            }
        });

        return promise;
    }

    begin() {
        let self = this;
        let promise = new Promise(function(resolve, reject){

        });

        return promise;
    }

    end() {
        let self = this;
        let promise = new Promise(function(resolve, reject){

        });

        return promise;
    }
}

module.exports = T200Mariadb;