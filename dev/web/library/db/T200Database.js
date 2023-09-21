const T200DBSetup = require('./T200DBSetup.js');

class T200Database {
    constructor() {
        this.database = {};
        this.setup = new T200DBSetup();
    }

    build(callback) {
        console.log(this.setup);
        switch(this.setup.type) {
            case "mariadb":
                console.log("mariadb");
                const T200Mariadb = require('./T200Mariadb.js');
                this.database = new T200Mariadb();
                this.database.build(this.setup, callback);
                break;
        }
    }

    connect(type, host, port, db, user, password, callback) {
        this.setup.type = type;
        this.setup.host = host;
        this.setup.port = port;
        this.setup.database = db;
        this.setup.user = user;
        this.setup.password = password;

        this.connect(callback);
    }

    connect(callback) {
        this.database.connect(callback);
    }

    disconnect(callback) {
        this.database.disconnect(callback);
    }

    query(url, callback) {
        this.database.query(url, callback);
    }

    execute(url, callback) {
        this.database.execute(url, callback);
    }
}

module.exports = T200Database;