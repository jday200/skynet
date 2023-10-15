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
                HomeStore.query(user.merge_select()).then(function(data){
                    if(data && 0 < data.length){
                        if(reject)reject("register error");
                    }else{
                        HomeStore.execute(user.merge_insert()).then(function(){
                            if(resolve)resolve('success');
                        }, function(err){
                            if(reject)reject(err);
                        });
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

    logout() {
        
    }

    find(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('find');

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select()).then(function(data){
                    if(data && 0 < data.length){
                        if(reject)reject("find error");
                    }else{
                        if(resolve)resolve(data);
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
}

module.exports = T200HomePerson;