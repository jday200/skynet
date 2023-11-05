const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');


class T200HomeCreate {
    constructor() {

    }

    create_person() {
        return `create table if not exists person (user_id int primary key auto_increment, username varchar(50) UNIQUE, password varchar(100), email varchar(100) UNIQUE)`;
    }

    create(db) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return db.execute(self.create_person()).then(function(){
                log(__filename, "create person success");
            }, function(){
                log(__filename, "create person failure");
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

module.exports = T200HomeCreate;