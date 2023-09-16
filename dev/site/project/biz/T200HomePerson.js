const T200HomeDatabase = require('../store/T200HomeDatabase.js');


class T200HomePerson {
    constructor() {

    }

    async register(user) {
        var HomeDatabase = new T200HomeDatabase();

        await HomeDatabase.connect();

        await HomeDatabase.query("select * form person where username = %s", user.username);

        await HomeDatabase.execute("insert into person ");

    }

    unregister() {

    }

    login() {

    }

    logout() {

    }

}