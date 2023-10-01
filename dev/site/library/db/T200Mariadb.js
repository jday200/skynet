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
                    self.connect = conn;
                    if(resolve)resolve();
                }, reject);
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.connect){
                if(reject)reject("mariadb disconnect error");
            }else{
                self.connect.end().then(function(){
                    self.connect = undefined;
                    if(resolve)resolve();
                }, reject);
            }
        });

        return promise;
    }

    query(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.connect){
                if(reject)reject("mariadb query error");
            }else{
                self.connect.query(sql).then(function(data){
                    if(resolve)resolve(data);
                }, reject);
            }
        });

        return promise;
    }

    execute(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.connect){
                if(reject)reject("mariadb execute error");
            }else{
                self.connect.query(sql).then(function(data){
                    let result = false;
                    if(undefined == data){

                    }else if(null == data){

                    }else if(1 != data.length()){

                    }else{
                        result = true;
                    }
                    if(resolve)resolve(result);
                }, reject);
            }
        });

        return promise;
    }
}

module.exports = T200Mariadb;