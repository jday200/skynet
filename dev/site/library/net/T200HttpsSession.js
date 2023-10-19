const { log, log_start, log_stop } = require('../lib.js');


class T200HttpsSession {
    constructor(cookie) {
        this.cookie = cookie;
    }

    static clear() {
        log(__filename, "clear");
        global.session = {};
    }

    set(name, value) {
        log(__filename, "set", name);
        global.session[name] = value;
    }

    get1(name) {
        log(__filename, "get", name);
        return global.session[name];
    }

    get(name) {
        log(__filename, "get", name);
        let sid = this.cookie.get('sid');

        if(sid){
            let data = global.session[sid];

            if(data){
                return data[name];
            }else{
                throw "session data is null";
            }
        }else{
            throw "sid is null";
        }
    }

    build_sid(data) {
        return Date.now();
    }
}

module.exports = T200HttpsSession;