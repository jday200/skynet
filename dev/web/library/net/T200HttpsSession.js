class T200HttpsSession {
    constructor(req) {
        this.req = req;
    }

    static clear() {
        global.session = {};
    }

    set(name, value) {
        global.session[name] = value;
    }

    get(name) {
        return global.session[name];
    }
}

module.exports = T200HttpsSession;