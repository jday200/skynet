const T200HomeStore = require('../store/T200HomeStore.js');

class T200HomePerson {
    constructor() {

    }

    register(user, callback) {
        console.log("register");

        let HomeStore = new T200HomeStore();

        HomeStore.connect(function(){
            HomeStore.query(user.merge_select(), function(result){
                if(result){
                    HomeStore.disconnect(function() {
                        console.log('err');
                    });
                }else{
                    HomeStore.execute(user.merge_insert(), function(err){
                        let error = err;
                        HomeStore.disconnect(function(err){
                            if(callback)callback(error);
                        });
                    });
                }
                
            });
        });
    }

    unregister() {

    }

    login(user, callback) {
        console.log("login");

        let HomeStore = new T200HomeStore();

        HomeStore.connect(function(err){
            if(err){

            }else{
                HomeStore.query(user.merge_login(), function(result){
                    console.log(result);

                   if(result){
                        HomeStore.disconnect(function() {
                            if(callback)callback();
                        });
                   }
                });
            }
        });
    }

    logout() {
        
    }
}

module.exports = T200HomePerson;