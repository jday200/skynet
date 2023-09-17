const T200HomeDatabase = require('../store/T200HomeDatabase.js');


class T200HomePerson {
    constructor() {

    }

    async register(user) {
        console.log('connecting...');
        console.log(user);

        var HomeDatabase = new T200HomeDatabase();

        await HomeDatabase.connect();

        let result = await HomeDatabase.query(`select * from person where username = '${user.username}'`);

        console.log(result);

        if(Object.keys(result).length != 0){
            return false;
        }

        let flag = await HomeDatabase.execute(user.parse_insert());

        if(flag){
            console.log('register success!');
            return true;
        }else{
            console.log('register fault!');
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