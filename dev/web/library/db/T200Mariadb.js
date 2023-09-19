const mariadb = require('mariadb');

class T200Mariadb {
    constructor() {

    }

    build(setup, callback) {
        this.setup = setup;
        this.pool = mariadb.createPool(setup);
        
        console.log(this.pool);
        callback();
    }

    connect(callback) {
        let self = this;
        this.pool.getConnection().then(function(conn){
            console.log(conn);
            self.conn = conn;
            callback();
        });
    }

    disconnect(callback) {
        //this.conn.disconnect(callback);
        this.conn.release().then(callback);
    }

    query(url, callback) {
        console.log(this.conn);
        //this.conn.query(url, callback);
        this.conn.query(url).then(callback);
    }

    execute(url, callback) {
        this.conn.query(url, function(err, data){
            
        });
    }
}

module.exports = T200Mariadb;