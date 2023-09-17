const T200Database = require('../../library/db/T200Database.js');

class T200HomeDatabase extends T200Database {
    constructor() {
        super();

        this.setup.host = "localhost";
        this.setup.port = 3306;
        this.setup.database = "home";
        this.setup.user = "home";
        this.setup.password = "home123";
    }

    async connect() {
        console.log(this.setup);
        await super.connect('mariadb', this.setup.host, this.setup.port, this.setup.database, this.setup.user, this.setup.password);
    }
}

module.exports = T200HomeDatabase;