const {error} = require('../../library/error.js');
const T200HomeStore = require('../store/T200HomeStore.js');

class T200HomePerson {
    constructor() {

    }

    register(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('register');

            HomeStore.connect().then(function(){
                return HomeStore.query(user.merge_select());
            }, function(){

            }).then(function(){
                return error();
            }, function(){
                return HomeStore.execute(user.merge_insert());
            }).then(function(){
                return HomeStore.disconnect();
            }, function(){
                return HomeStore.disconnect();
            }).then(function(){

            }, function(){

            });
        });

        return promise;
    }

    unregister() {

    }

    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('login');

            return HomeStore.connect().then(function(){
                return HomeStore.query(user.merge_select()).then(function(){
                    
                }, function(){
                    return HomeStore.execute(user.merge_insert()).then(function(){

                    }, function(){

                    });
                }).finally(function(){
                    return HomeStore.disconnect();
                });
            }, function(){
                
            }).then(resolve, reject);
        });

        return promise;
    }

    logout() {

    }
}

module.exports = T200HomePerson;