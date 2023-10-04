const {error} = require('../../library/error.js');
const T200Database = require('../../library/db/T200Database.js');
const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');
const T200Person = require('../models/T200Person.js');

class T200HomeDatabase extends T200Database {
    constructor() {
        super();
        this.setup = new T200HomeDBSetup();
    }

    init() {
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
            console.log('success');
            return self.stop();
        }, function(){
            console.log('failure');
            result = false;
        }).finally(function(){
            if(result){
                console.log('init success');
            }else{
                console.log('init failure');
            }
        });
    }

    clear() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let person = new T200Person();
            let result = true;

            self.connect().then(function(){
                return self.execute(person.build_drop()).then(function(){

                }, function(err){
                    console.log(err);
                    result = false;
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
                    console.log('clear success');
                    if(resolve)resolve();
                }else{
                    console.log('clear failure');
                    if(reject)reject();
                }
            });
        });

        return promise;
    }

    create() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let person = new T200Person();
            let result = true;

            debugger;

            self.connect().then(function(){
            
                return self.execute(person.build_create()).then(function(){

                }, function(err){
                    console.log(err);
                    result = false;
                }).finally(function(){
                    return self.disconnect();
                });
            
            }, function(err){
                console.log(err);
                result = false;
                return error();
            }).then(function(){

            }, function(err){
                console.log(err);
                result = false;
                return error();
            }).finally(function(){
                if(result){
                    console.log('create success');
                    if(resolve)resolve();
                }else{
                    console.log('create failure');
                    if(reject)reject();
                }
            });
        });

        return promise;
    }

}

let HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();