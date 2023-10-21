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
        }else{

        }

        let promise = new Promise(function(resolve, reject){
            if(flag){
                if(resolve)resolve();
            }else{
                if(reject)reject("mariadb start error");
            }
        });

        return promise;
    }

    stop() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.pool){
                if(reject)reject("mariadb stop error");
            }else{
                self.pool.end();
                if(resolve)resolve();
            }
        });

        return promise;
    }

    connect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.pool){
                if(reject)reject("mariadb connect error");
            }else{
                self.pool.getConnection().then(function(conn){
                    self.conn = conn;
                    if(resolve)resolve();
                }, function(err){
                    if(reject)reject(err);
                });
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.conn){
                if(reject)reject("mariadb disconnect error");
            }else{
                self.conn.end().then(function(){
                    self.conn = undefined;
                    if(resolve)resolve();
                }, function(err){
                    if(reject)reject(err);
                });
            }
        });

        return promise;
    }

    query(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.conn){
                if(reject)reject("mariadb query error");
            }else{
                self.conn.query(sql).then(function(data){
                    if(resolve)resolve(data);
                }, function(err){
                    if(reject)reject(err);
                });
            }
        });

        return promise;
    }

    execute(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.conn){
                if(reject)reject("mariadb execute error");
            }else{
                self.conn.query(sql).then(function(data){
                    let result = false;

                   if(data && 0 == data.warningStatus){
                    result = true;
                   }
                    if(resolve)resolve(result);
                }, function(err){
                    if(reject)reject(err);
                });
            }
        });

        return promise;
    }
}

module.exports = T200Mariadb;