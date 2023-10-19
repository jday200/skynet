const { log, log_start, log_stop } = require('../../library/lib.js');

const T200Database = require('../../library/db/T200Database.js');
const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');

const T200Person = require('../models/T200Person.js');
const T200Article = require('../models/T200Article.js');
const T200Blog = require('../models/T200Blog.js');


class T200HomeDatabase extends T200Database {
    constructor() {
        super();
        this.setup = new T200HomeDBSetup();
    }

    init() {
        log(__filename, "init");

        let self = this;
        let result = true;

        this.start().then(function(){
            return self.clear().then(function(){
                return self.create().then(function(){

                }, function(){
                    result = false;
                    return error();
                });
            }, function(){
                result = false;
                return error();
            });
        }, function(){
            result = false;
            return error();
        }).then(function(){
            return self.stop();
        }, function(){
            result = false;
        }).finally(function(){
            if(result){
                log(__filename, "init success");
            }else{
                log(__filename, "init failure");
            }
        });
    }

    clear() {
        log(__filename, "clear");

        let self = this;
        let promise = new Promise(function(resolve, reject){
            let person = new T200Person();
            let article = new T200Article();
            let blog = new T200Blog();

            let result = true;

            self.connect().then(function(){
                return self.execute(person.build_drop()).then(function(){

                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(article.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(blog.build_drop());
                }, function(){
                    result = false;
                    return error();
                }).finally(function(){
                    return self.disconnect();
                });
                
            }, function(){
                result = false;
                return error();
            }).then(function(){

            }, function(){
                result = false;
                return error();
            }).finally(function(){
                if(result){
                    log(__filename, "clear success");
                    if(resolve)resolve();
                }else{
                    log(__filename, "clear failure");
                    if(reject)reject();
                }
            });
        });

        return promise;
    }

    create() {
        log(__filename, "create");

        let self = this;
        let promise = new Promise(function(resolve, reject){
            let person = new T200Person();
            let article = new T200Article();
            let blog = new T200Blog();

            let result = true;

            self.connect().then(function(){
            
                return self.execute(person.build_create()).then(function(){

                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(article.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(blog.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).finally(function(){
                    return self.disconnect();
                });
            
            }, function(err){
                result = false;
                return error();
            }).then(function(){

            }, function(err){
                result = false;
                return error();
            }).finally(function(){
                if(result){
                    log(__filename, "create success");
                    if(resolve)resolve();
                }else{
                    log(__filename, "create failure");
                    if(reject)reject();
                }
            });
        });

        return promise;
    }

}

log_start("database init");

let HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();

log_stop("database init");