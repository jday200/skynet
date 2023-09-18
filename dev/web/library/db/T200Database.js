const T200DBSetup = require('./T200DBSetup.js');

class T200Database {
    constructor() {
        this.setup = new T200DBSetup();
    }

    build() {
        switch(this.setup.type) {
            case "mariadb":
            case "":

        }
    }

    connect(type, host, port, db, user, password, callback) {

    }

    connect(callback) {
        this.pool.getConnection();
    }

    disconnect(callback) {
        this.conn.disconnect(callback);
    }

    query(url, callback) {
        this.conn.query(url, callback);
    }

    execute(url, callback) {
        this.conn.query(url, function(err, data){
            
        });
    }
}

module.exports = T200Database;