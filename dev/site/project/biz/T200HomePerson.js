const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');


class T200HomePerson extends T200HomeBiz {
    constructor() {
        super();
    }

    register(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return self.store.connect().then(function(){
                debugger;
                return self.store.query(user.merge_select_by_field("username", user.username)).then(function(data){
                    if(data){
                        if(0 < data.length){
                            return error();
                        }else{
                            user._values = user.values();
                            return self.store.execute(user.merge_insert()).then(function(){
                                resolve();
                                /*
                                self.store.execute(user.merge_update()).then(function(){
        
                                }, function(){
        
                                });
                                */
                            }, function(err){
                                return error();
                            });
                        }
                    }else{
                        return error();
                    }
                    
                }, function(err){
                    console.log(err);
                    reject();
                }).catch(function(err){
                    console.log(err);
                }).finally(function(){
                    return self.store.disconnect();
                });
            }, function(){
                reject();
            });
        });

        return promise;
    }


    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            return self.store.connect().then(function(){
                return self.store.query(user.merge_login()).then(function(data){
                    if(data && 1 == data.length){
                        user._fields = user.login_fields();
                        user._values = user.login_values();

                        return self.store.execute(user.merge_login_update()).then(function(){
                            resolve(data);
                            /*
                            self.store.execute(user.merge_update()).then(function(){
    
                            }, function(){
    
                            });
                            */
                        }, function(err){
                            return error();
                        });
                    }else{
                        return error();
                    }

                }, function(err){
                    console.log(err);
                    reject();
                }).catch(function(err){
                    console.log(err);
                }).finally(function(){
                    return self.store.disconnect();
                });
            }, function(){
                reject();
            });
        });

        return promise;
    }

}

module.exports = T200HomePerson;