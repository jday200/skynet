const { log, log_start, log_stop } = require('../../library/lib.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeResource {
    constructor() {

    }


    list(resource) {
        let self = this;
        let promise = new Promise(function(resolve, reject){

            log(__filename, "list");

            let HomeStore = new T200HomeStore();

            HomeStore.connect().then(function(){
                HomeStore.query(resource.merge_select_all()).then(function(data){
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

}

module.exports = T200HomeResource;