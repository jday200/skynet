const T200HomeSetup = require('./T200HomeSetup.js');
const T200HttpServer = require('../library/net/T200HttpServer.js');


class T200HomeServer extends T200HttpServer {
    constructor() {
        super();
        global.setup.http = new T200HomeSetup();
    }
}

module.exports = T200HomeServer;