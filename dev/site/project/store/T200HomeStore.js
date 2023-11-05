const { error, log } = require('../../library/T200Lib.js');
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
        log(__filename, "begin");
        return global.database.begin();
    }

    commit() {
        log(__filename, "commit");
        return global.database.commit();
    }

    rollback() {
        log(__filename, "rollback");
        return global.database.rollback();
    }
}

module.exports = T200HomeStore;