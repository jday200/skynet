const T200Error = require('../../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../../library/lib.js');

const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');
const T200Database = require('../../library/db/T200Database.js');

const T200HomeClear = require('./T200HomeClear.js');
const T200HomeCreate = require('./T200HomeCreate.js');


class T200HomeDatabase extends T200Database {
    constructor() {
        super();
        this.setup = new T200HomeDBSetup();
    }

    init() {
        log(__filename, "init");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return self.start().then(function(){
                let HomeClear = new T200HomeClear();
                return HomeClear.clear(self).then(function(){
                    log(__filename, "clear success");
                    let HomeCreate = new T200HomeCreate();
                    return HomeCreate.create(self).then(function(){
                        log(__filename, "create success");
                        resolve();
                    }, function(){
                        log(__filename, "create failure");
                        return error();
                    });
                }, function(){
                    log(__filename, "clear failure");
                    return error();
                }).finally(function(){
                    return self.stop();
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

log_start(__filename, "Home Database init");

let HomeDatabase = new T200HomeDatabase;

HomeDatabase.init().then(function(){
    log(__filename, "Home Database init success");
}, function(){
    log(__filename, "Home Database init failure");
});

log_stop(__filename, "Home Database init");