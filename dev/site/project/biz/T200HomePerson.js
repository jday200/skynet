const T200HomeDatabase = require('../store/T200HomeDatabase.js');


class T200HomePerson {
    constructor() {

    }

    async register(user) {
        console.log('connecting...');

        var HomeDatabase = new T200HomeDatabase();

        await HomeDatabase.connect();

        let result = await HomeDatabase.query(`select * from person where username = '${user.username}'`);

        console.log(result);

        if(result){
            throw "error";
        }

        let flag = await HomeDatabase.execute(user.parse_insert());

        if(flag){
            return true;
        }else{

        }
        return false;
    }

    unregister() {

    }

    login() {

    }

    logout() {

    }

}

module.exports = T200HomePerson;