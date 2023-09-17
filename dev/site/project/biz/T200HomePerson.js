const T200HomeDatabase = require('../store/T200HomeDatabase.js');


class T200HomePerson {
    constructor() {

    }

    async register(user) {
        console.log('connecting...');

        var HomeDatabase = new T200HomeDatabase();

        await HomeDatabase.connect();

        let result = await HomeDatabase.query("select * form person where username = ${user.username}");

        console.log(result);

        //await HomeDatabase.execute("insert into person ");

    }

    unregister() {

    }

    login() {

    }

    logout() {

    }

}

module.exports = T200HomePerson;