const { error, log } = require('../../library/lib.js');
const T200Error = require('../../library/T200Error.js');


class T200HomeStore {
    constructor() {

    }

    connect() {
        log(__filename, "connect");
        return global.database.connect();
    }

    disconnect() {
        log(__filename, "disconnect");
        return global.database.disconnect();
    }

    query(sql) {
        log(__filename, "query", sql);
        return global.database.query(sql);
    }

    execute(sql) {
        log(__filename, "execute", sql);
        return global.database.execute(sql);
    }

    begin() {

    }

    end() {
        
    }
}

module.exports = T200HomeStore;