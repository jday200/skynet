const T200HomeSetup = require('./T200HomeSetup.js');
const T200HomeDBSetup = require('./store/T200HomeDBSetup.js');
const T200HttpServer = require('../library/net/T200HttpServer.js');

class T200HomeServer extends T200HttpServer {
    constructor() {
        super();
        global.setup.http = new T200HomeSetup();
        global.setup.database = new T200HomeDBSetup();
    }

    start() {

    }

    load_db() {


    }

    load_action() {
        
    }
}

module.exports = T200HomeServer;