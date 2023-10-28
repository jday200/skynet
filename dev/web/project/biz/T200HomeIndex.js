const { error, log } = require('../../library/lib.js');
const T200Error = require('../../library/T200Error.js');


class T200HomeIndex {
    constructor() {

    }

    load() {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data;

            resolve(data);
        });

        return promise;
    }
}

module.exports = T200HomeIndex;