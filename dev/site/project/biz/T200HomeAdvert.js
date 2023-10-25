const { log, log_start, log_stop } = require('../../library/lib.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeAdvert {
    constructor() {

    }


    add(advert) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            log(__filename, "add");

            let result = false;
            HomeStore.connect().then(function(){
                return HomeStore.execute(advert.merge_insert()).then(function(){
                    result = true;
                }, function(err){
                    result = false;
                }).finally(function(){
                    return HomeStore.disconnect().then(function(){

                    }, function(err){
                        result = false;
                    });
                });

            }, function(err){
                result = false;
            }).finally(function(){
                if(result){
                    if(resolve)resolve();
                }else{
                    if(reject)reject();
                }
            });

        });

        return promise;
    }

    modify(advert) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            log(__filename, "modify");

            HomeStore.connect().then(function(){
                return HomeStore.execute(advert.merge_update()).then(function(){
                    result = true;
                }, function(err){
                    result = false;
                }).finally(function(){
                    return HomeStore.disconnect().then(function(){

                    }, function(err){
                        result = false;
                    });
                });

            }, function(err){
                result = false;
            }).finally(function(){
                if(result){
                    if(resolve)resolve();
                }else{
                    if(reject)reject();
                }
            });

        });

        return promise;
    }

    search(advert) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('search');

            HomeStore.connect().then(function(){
                HomeStore.query(advert.merge_select()).then(function(data){
                    if(resolve)resolve(data);
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

    list(advert) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('list');

            HomeStore.connect().then(function(){
                HomeStore.query(advert.merge_select_all()).then(function(data){
                    if(resolve)resolve(data);
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

    get(advert) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            log(__filename, "get advert");

            HomeStore.connect().then(function(){
                return HomeStore.query(advert.merge_select_by_advert_id()).then(function(data){

                    if(data && 1 == data.length){
                        result = true;
                        if(resolve)resolve(data[0]);
                    }else{
                        result = false;
                    }

                }, function(err){
                    result = false;
                }).finally(function(){
                    return HomeStore.disconnect().then(function(){

                    }, function(err){
                        result = false;
                    });
                });
            }, function(err){
                result = false;
            }).finally(function(){
                if(result){

                }else{
                    if(reject)reject();
                }
            });

        });

        return promise;
    }

    remove_all(adver) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            log(__filename, "remove");

            HomeStore.connect().then(function(){
                return HomeStore.execute(advert.merge_delete_all()).then(function(){
                    result = true;
                }, function(err){
                    result = false;
                }).finally(function(){
                    return HomeStore.disconnect().then(function(){

                    }, function(err){
                        result = false;
                    });
                });

            }, function(err){
                result = false;
            }).finally(function(){
                if(result){
                    if(resolve)resolve();
                }else{
                    if(reject)reject();
                }
            });

        });

        return promise;
    }

}

module.exports = T200HomeAdvert;