const {error} = require('../../library/error.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomePerson {
    constructor() {

    }

    register() {

    }

    unregister() {

    }

    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            
            console.log('login');

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select()).then(function(data){
                    if(data && (1 == data.length)){
                        /*
                        HomeStore.execute(user.merge_update()).then(function(){

                        }, function(){

                        });
                        */
                        if(resolve)resolve();
                    }else{
                        if(reject)reject("login error");
                    }
                }, function(err){
                    if(reject)reject(err);
                }).finally(function(){
                    HomeStore.disconnect().then(function(){

                    }, function(err){
                        if(reject)reject(err);
                    });
                });
            }, function(err){
                if(reject)reject(err);
            });
        });

        return promise;
    }

    /*
    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            console.log('login');

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select()).then(function(data){
                    if(data && (1 == data.length)){
                        / *
                        HomeStore.execute(user.merge_update()).then(function(){

                        }, function(){

                        });
                        * /
                       result = true;
                    }else{

                    }
                }, function(){

                }).finally(function(){
                    HomeStore.disconnect().then(function(){

                    }, function(){
                        result = false;
                    });
                });
            }, function(err){

            }).finally(function(){
                if(result){
                    if(resolve)resolve();
                }else{
                    if(reject)reject("login error");
                }
            });
        });

        return promise;
    }
    */

    logout() {
        
    }
}

module.exports = T200HomePerson;