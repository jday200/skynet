class T200DBSetup {
    constructor() {
        this.type = 'mariadb';
        this.host = "localhost";
        this.port = 0;
        this.database = '';
        this.user = '';
        this.password = '';
    }
}

module.exports = T200DBSetup;