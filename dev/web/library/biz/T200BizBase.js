const { error, log } = require('../lib.js');
const T200Error = require('../T200Error.js');


class T200BizBase {
    constructor() {

    }

    check() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.store){
                reject(T200Error.build(1));
            }else{
                resolve();
            }
        });

        return promise;
    }

    query(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.store){
                reject(T200Error.build(1));
            }else{

            }
        });

        return promise;
    }

    execute(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.store){
                reject(T200Error.build(1));
            }else{

            }
        });

        return promise;
    }
}

module.exports = T200BizBase;