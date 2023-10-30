const T200Error = require('../../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../../library/lib.js');


class T200HomeClear {
    constructor() {

    }

    drop_person() {
        return `drop table if exists person`;
    }

    drop_house_rent() {
        return `drop table if exists house_rent`;
    }

    drop_house_want() {
        return `drop table if exists house_want`;
    }

    clear(db) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return db.connect().then(function(){
                return db.execute(self.drop_person()).then(function(){
                    return db.execute(self.drop_house_rent());
                }, function(){
                    return error();
                }).then(function(){
                    return db.execute(self.drop_house_want());
                }, function(){
                    return error();
                }).then(function(){
                    resolve();
                }, function(){
                    reject();
                }).finally(function(){
                    return db.disconnect();
                });
            }, function(){
                reject();
            }).then(function(){
       
            }, function(){
                reject();
            });
        });

        return promise;
    }
}

module.exports = T200HomeClear;