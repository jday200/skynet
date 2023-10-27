const T200Error = require('../T200Error.js');
const { error, log, log_start, log_stop } = require('../lib.js');


class T200HttpsResponse {
    constructor(res) {
        this.res = res;

        this.paras = {};
        this._status = 200;
        this._type = "text";
        this._result = false;
        this._data = "";
    }

    status(value) {
        log(__filename, "set status", value);
        this._status = value;
    }

    type(value) {
        log(__filename, "set type", value);
        this._type = value;
    }

    data(value) {
        log(__filename, "set data");
        this._data = value;
    }

    set(name, value) {
        log(__filename, "set", name);
        this.res.setHeader(name, value);
    }

    FAILURE() {
        this._status = 200;
        this._result = false;
    }

    ERROR() {
        this._status = 500;
    }

    SEND_END() {
        log(__filename, "END");
        
        
    }
}

module.exports = T200HttpsResponse;