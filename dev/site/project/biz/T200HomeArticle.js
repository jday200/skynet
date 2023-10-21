const { log, log_start, log_stop } = require('../../library/lib.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeArticle {
    constructor() {

    }

    add(article) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('add');

            HomeStore.connect().then(function(){
                HomeStore.query(article.merge_select()).then(function(data){
                    if(data && 0 < data.length){
                        if(reject)reject("register error");
                    }else{
                        HomeStore.execute(article.merge_insert()).then(function(){
                            if(resolve)resolve();
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

    search(article) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('search');

            HomeStore.connect().then(function(){
                HomeStore.query(article.merge_select()).then(function(data){
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

    list(article) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('list');

            HomeStore.connect().then(function(){
                HomeStore.query(article.merge_select_all()).then(function(data){
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

module.exports = T200HomeArticle;