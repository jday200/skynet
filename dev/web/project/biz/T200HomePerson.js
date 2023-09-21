const T200HomeStore = require('../store/T200HomeStore.js');

class T200HomePerson {
    constructor() {

    }

    register(user, callback) {
        let HomeStore = new T200HomeStore();

        HomeStore.connect(function(){
            HomeStore.query(user.merge_select(), function(){
                HomeStore.execute(user.merge_insert(), function(){
                    HomeStore.disconnect(function(){
                        
                    });
                })
            });
        });
    }

    unregister() {

    }

    login() {

    }

    logout() {
        
    }
}

module.exports = T200HomePerson;