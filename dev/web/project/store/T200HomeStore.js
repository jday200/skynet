
class T200HomeStore {
    constructor() {

    }

    connect(callback) {
        global.database.connect(callback);
    }

    disconnect(callback) {
        global.database.disconnect(callback);
    }

    query(sql, callback) {
        global.database.query(sql, callback);
    }

    execute(sql, callback) {
        global.database.execute(sql, callback);
    }
}

module.exports = T200HomeStore;