class T200HomeStore {
    constructor() {

    }

    connect() {
        return global.database.connect();
    }

    disconnect() {
        return global.database.disconnect();
    }

    query(sql) {
        return global.database.query(sql);
    }

    execute(sql) {
        return global.database.execute(sql);
    }
}

module.exports = T200HomeStore;