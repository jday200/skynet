const mariadb = require('mariadb');

class T200Mariadb {
    constructor() {

    }

    build(setup, callback) {
        this.setup = setup;
        this.pool = mariadb.createPool(setup);
        
        console.log(this.pool);
        if(callback)callback();
    }

    connect(callback) {
        let self = this;
        this.pool.getConnection().then(function(conn){
            console.log(conn);
            self.conn = conn;
            if(callback)callback();
        });
    }

    disconnect(callback) {
        this.conn.release().then(callback);
    }

    query(url, callback) {
        console.log(this.conn);
        this.conn.query(url).then(callback);
    }

    execute(url, callback) {
        this.conn.query(url).then(callback);
    }
}

module.exports = T200Mariadb;