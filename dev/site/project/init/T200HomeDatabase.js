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

        this.start().then(function(){
            return self.clear();
        }, function(){

        }).then(function(){
            return self.create();
        }, function(){

        }).finally(function(){
            return self.stop();
        }).then(function(){
            
        }, function(){

        });
    }

    clear() {
        let self = this;
        let promise = new Promise(function(){
            let person = new T200Person();

            self.connect().then(function(){
                return self.execute(person.build_drop());
            }, function(){

            }).finally(function(){
                return self.disconnect();
            }).then(function(){

            }, function(){

            });
        });

        return promise;
    }

    create() {
        let self = this;
        let promise = new Promise(function(){
            let person = new T200Person();

            self.connect().then(function(){
                return self.execute(person.build_create());
            }, function(){

            }).finally(function(){
                return self.disconnect();
            }).then(function(){
                
            }, function(){

            });
        });

        return promise;
    }
}

module.exports = T200HomeDatabase;

let HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();