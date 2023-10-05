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

            return HomeStore.connect().then(function(){
                return HomeStore.query(user.merge_select()).then(function(data){
                    if(data && data.length > 0){
                        console.log(data);
                    }else{
                        return HomeStore.execute(user.merge_insert()).then(function(){

                        }, function(err){
                            console.log(err);
                        });
                    }
                    
                }, function(err){
                    return error();
                }).finally(function(){
                    return HomeStore.disconnect();
                });
            }, function(){

            }).then(resolve, reject);
        });

        return promise;
    }

    unregister() {

    }

    /*
    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('login');

            return HomeStore.connect().then(function(){
                return HomeStore.query(user.merge_select()).then(function(){
                    if(data && (1 == data.length)){
                        / *
                        return HomeStore.execute(user.merge_update()).then(function(){

                        }, function(){
    
                        });
                        * /
                       resolve();
                    }else{
                        reject();
                    }
                }, function(){
                   return error();
                }).finally(function(){
                    return HomeStore.disconnect();
                });
            }, function(){
                return error();
            }).then(resolve, reject);
        });

        return promise;
    }
    */

    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = true;
            console.log('login');

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select()).then(function(data){
                    if(data && (1 == data.length)){

                    }else{
                        result = false;
                    }
                }, function(){
                    result = false;
                }).finally(function(){
                    HomeStore.disconnect().then(function(){

                    }, function(){
                        result = false;
                    });
                });
            }, function(){
                result = false;
            }).finally(function(){
                if(result){
                    resolve();
                }else{
                    reject();
                }
            });
        });

        return promise;
    }

    logout() {

    }
}

module.exports = T200HomePerson;