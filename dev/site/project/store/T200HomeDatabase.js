const T200Database = require('../../library/db/T200Database.js');

class T200HomeDatabase extends T200Database {
    constructor() {
        super();
    }

    async connect() {
        await super.connect('mariadb', global.setup.host, global.setup.port, global.setup.database, global.setup.user, global.setup.password);
    }
}

module.exports = T200HomeDatabase;