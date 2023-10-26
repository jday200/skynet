const T200Error = require('../T200Error.js');
const { error, log, log_start, log_stop } = require('../lib.js');


class T200HttpsSession {
    constructor(cookie) {
        this.cookie = cookie;
    }

    static clear() {
        log(__filename, "Session clear");
        global.session = {};
    }

    set(name, value) {
        log(__filename, "Session set", name);
        global.session[name] = value;
    }

    get(name) {
        log(__filename, "Session get", name);
        let sid = this.cookie.get('sid');

        if(sid){
            let data = global.session[sid];

            if(data){
                return data[name];
            }else{
                throw T200Error.build(1);
            }
        }else{
            throw T200Error.build(1);
        }
    }

    build_sid(data) {
        return Date.now();
    }
}

module.exports = T200HttpsSession;