const T200DBSetup = require('./T200DBSetup.js');
const T200Mariadb = require('./T200Mariadb.js');

class T200Database {
    constructor() {
        this.setup = new T200DBSetup();
    }

    build(callback) {
        console.log(this.setup);
        switch(this.setup.type) {
            case "mariadb":
                console.log("mariadb");
                this.database = new T200Mariadb();
                this.database.build(this.setup, callback);
                break;
        }
    }

    connect(type, host, port, db, user, password, callback) {

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
        this.database.query(url, function(err, data){
            
        });
    }
}

module.exports = T200Database;