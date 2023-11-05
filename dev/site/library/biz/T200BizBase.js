const { error, log } = require('../T200Lib.js');
const T200Error = require('../T200Error.js');


class T200BizBase {
    constructor() {

    }

    #check() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(undefined == self.store){
                reject(T200Error.build());
            }else{
                resolve();
            }
        });

        return promise;
    }
}

module.exports = T200BizBase;