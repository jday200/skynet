const { log, log_start, log_stop } = require('../../library/lib.js');
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
                       let result = {};

                       result.userid = data[0].userid;
                       result.username = data[0].username;

                        if(resolve)resolve(result);
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

    logout(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            
            log(__filename, "logout");

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select()).then(function(data){
                    if(data && (1 == data.length)){
                        /*
                        HomeStore.execute(user.merge_update()).then(function(){

                        }, function(){

                        });
                        */
                       let result = {};

                       result.userid = data[0].userid;
                       result.username = data[0].username;

                        if(resolve)resolve(result);
                    }else{
                        if(reject)reject("logout error");
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


    add(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            log(__filename, "add");

            let result = false;
            HomeStore.connect().then(function(){
                return HomeStore.execute(user.merge_insert()).then(function(){
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

    modify(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            log(__filename, "modify");

            HomeStore.connect().then(function(){
                return HomeStore.execute(user.merge_update()).then(function(){
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

    search(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('search');

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select()).then(function(data){
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

    list(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();

            console.log('list');

            HomeStore.connect().then(function(){
                HomeStore.query(user.merge_select_all()).then(function(data){
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

    get(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            log(__filename, "get user");

            HomeStore.connect().then(function(){
                return HomeStore.query(user.merge_select_by_user_id()).then(function(data){

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

    remove_all(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let HomeStore = new T200HomeStore();
            let result = false;

            log(__filename, "remove");

            HomeStore.connect().then(function(){
                return HomeStore.execute(user.merge_delete_all()).then(function(){
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

module.exports = T200HomePerson;