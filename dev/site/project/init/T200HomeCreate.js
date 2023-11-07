const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');


class T200HomeCreate {
    constructor() {

    }

    create_person() {
        return `create table if not exists person (user_id int primary key auto_increment, username varchar(50) UNIQUE, password varchar(100), email varchar(100) UNIQUE)`;
    }

    create_house_rent() {
        return `create table if not exists house_rent (id int primary key auto_increment, user_id int, title varchar(255), content text)`;
    }

    create_house_wanted() {
        return `create table if not exists house_wanted (id int primary key auto_increment, user_id int, title varchar(255), content text)`;
    }

    create_job_recruit() {
        return `create table if not exists job_recruit (id int primary key auto_increment, user_id int, title varchar(255), content text)`;
    }

    create_job_wanted() {
        return `create table if not exists job_wanted (id int primary key auto_increment, user_id int, title varchar(255), content text)`;
    }

    create_region() {
        return `create table if not exists region (id int primary key auto_increment, name varchar(255), content text)`;
    }

    create_city() {
        return `create table if not exists city (id int primary key auto_increment, region_id int, level int, name varchar(255), content text)`;
    }

    create_index_cities() {
        return `create table if not exists index_cities (id int primary key auto_increment, city_id int, level int, intro varchar(255) )`;
    }

    create(db) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return db.execute(self.create_person()).then(function(){
                log(__filename, "create table person success");
            }, function(){
                log(__filename, "create table person failure");
                return error();
            }).then(function(){
                return db.execute(self.create_house_rent()).then(function(){
                    log(__filename, "create table house rent success");
                }, function(){
                    log(__filename, "create table house rent failure");
                    return error();
                });
            }, function(){
                return error();
            }).then(function(){
                return db.execute(self.create_house_wanted()).then(function(){
                    log(__filename, "create table house wanted success");
                }, function(){
                    log(__filename, "create table house wanted failure");
                    return error();
                });
            }, function(){
                return error();
            }).then(function(){
                return db.execute(self.create_job_recruit()).then(function(){
                    log(__filename, "create table job recruit success");
                }, function(){
                    log(__filename, "create table job recruit failure");
                    return error();
                });
            }, function(){
                return error();
            }).then(function(){
                return db.execute(self.create_job_wanted()).then(function(){
                    log(__filename, "create table job wanted success");
                }, function(){
                    log(__filename, "create table job wanted failure");
                    return error();
                });
            }, function(){
                return error();
            }).then(function(){
                return db.execute(self.create_region()).then(function(){
                    log(__filename, "create table region success");
                }, function(){
                    log(__filename, "create table region failure");
                    return error();
                });
            }, function(){
                return error();
            }).then(function(){
                return db.execute(self.create_city()).then(function(){
                    log(__filename, "create table city success");
                }, function(){
                    log(__filename, "create table city failure");
                    return error();
                });
            }, function(){
                return error();
            }).then(function(){
                return db.execute(self.create_index_cities()).then(function(){
                    log(__filename, "create table index_cities success");
                }, function(){
                    log(__filename, "create table index_cities failure");
                    return error();
                });
            }, function(){
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