const mariadb = require('mariadb');

class T200Mariadb {
    constructor() {

    }

    build() {

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

module.exports = T200Mariadb;