class T200HttpSession {
    constructor(req, cookie) {
        this.request = req;
        this.cookie = cookie;

        console.log(global.session);
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

module.exports = T200HttpSession;