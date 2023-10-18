const { log, log_start, log_stop } = require('../lib.js');


class T200HttpsSession {
    constructor(req) {
        this.req = req;
    }

    static clear() {
        log(__filename, "clear");
        global.session = {};
    }

    set(name, value) {
        log(__filename, "set", name);
        global.session[name] = value;
    }

    get(name) {
        log(__filename, "get", name);
        return global.session[name];
    }
}

module.exports = T200HttpsSession;