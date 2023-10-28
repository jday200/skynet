const T200Error = require('../../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../../library/lib.js');


class T200HomeCreate {
    constructor() {

    }

    create_person() {
        return `create table if not exists person (user_id int primary key auto_increment, username varchar(50) UNIQUE, password varchar(100), email varchar(100) UNIQUE)`;
    }

    create(db) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return db.connect().then(function(){
                debugger;
                return db.execute(self.create_person()).then(function(){
                    debugger;
                    resolve();
                }, function(){
                    debugger;
                    reject();
                }).finnaly(function(){
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

module.exports = T200HomeCreate;