const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');


class T200HomeClear {
    constructor() {

    }

    drop_person() {
        return `drop table if exists person`;
    }

    clear(db) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return db.execute(self.drop_person()).then(function(){
                log(__filename, "drop person success");
            }, function(){
                log(__filename, "drop person failure");
                return error();
            }).then(function(){
                resolve();
            }, function(){
                reject();
                return error();
            });
        });

        return promise;
    }
}

module.exports = T200HomeClear;