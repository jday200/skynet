const T200Error = require('../../T200Error.js');


class T200StoreBase {
    constructor(client) {
        this._client = client;
        this._connected = false;
    }

    check() {
        if(undefined == this._client){
            
        }else{
            return true;
        }

        return false;
    }

    is_connected() {
        return this._connected;
    }

    connect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(self.check()){
                self._client.connect().then(resolve, reject);
            }else{
                reject();
            }
        });

        return promise;
    }

    disconnect() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(self.check()){
                self._client.disconnect().then(resolve, reject);
            }else{
                reject();
            }
        });

        return promise;
    }

    query(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(self.check()){
                self._client.query(sql).then(resolve, reject);
            }else{
                reject();
            }
        });

        return promise;
    }

    execute(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(self.check()){
                self._client.execute(sql).then(resolve, reject);
            }else{
                reject();
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

    commit() {
        let self = this;
        let promise = new Promise(function(resolve, reject){

        });

        return promise;
    }

    rollback() {
        let self = this;
        let promise = new Promise(function(resolve, reject){

        });

        return promise;
    }
}

module.exports = T200StoreBase;