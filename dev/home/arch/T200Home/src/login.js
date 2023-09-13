const HomeStore = require('../suite/store/T200HomeStore.js');


class HomeLogin {
    constructor() {

    }

    login(username, password) {
        var store = new HomeStore();

        var result;
        try{
            result = store.query('get_user', username, password);
        }catch(err){
            console.log(err);
        }
        if(result){
            return 1;
        }else{

        }

        return null;
    }
}

module.exports = HomeLogin;