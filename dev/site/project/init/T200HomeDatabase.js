const { log, log_start, log_stop } = require('../../library/lib.js');

const T200Database = require('../../library/db/T200Database.js');
const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');


const T200Advert = require('../models/T200Advert.js');
const T200Person = require('../models/T200Person.js');
const T200Article = require('../models/T200Article.js');
const T200Blog = require('../models/T200Blog.js');
const T200Exchange = require('../models/T200Exchange.js');
const T200House = require('../models/T200House.js');
const T200Job = require('../models/T200Job.js');
const T200Resource = require('../models/T200Resource.js');
const T200Trading = require('../models/T200Trading.js');
const T200Traffic = require('../models/T200Traffic.js');


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

                }, function(err){
                    result = false;
                    return error();
                });
            }, function(err){
                result = false;
                return error();
            });
        }, function(){
            result = false;
            return error();
        }).then(function(){
            return self.stop();
        }, function(err){
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
            let advert = new T200Advert();
            let exchange = new T200Exchange();
            let person = new T200Person();
            let article = new T200Article();
            let blog = new T200Blog();
            let house = new T200House();
            let job = new T200Job();
            let resource = new T200Resource();
            let trading = new T200Trading();
            let traffic = new T200Traffic();

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
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(advert.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(exchange.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(house.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(job.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(resource.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(trading.build_drop());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(traffic.build_drop());
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
            let advert = new T200Advert();
            let exchange = new T200Exchange();
            let person = new T200Person();
            let article = new T200Article();
            let blog = new T200Blog();
            let house = new T200House();
            let job = new T200Job();
            let resource = new T200Resource();
            let trading = new T200Trading();
            let traffic = new T200Traffic();

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
                }).then(function(){
                    return self.execute(advert.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(exchange.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(house.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(job.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(resource.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(trading.build_create());
                }, function(err){
                    result = false;
                    return error();
                }).then(function(){
                    return self.execute(traffic.build_create());
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