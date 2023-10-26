const T200Error = require('../T200Error.js');
const { error, log, log_start, log_stop } = require('../lib.js');


class T200HttpsResponse {
    constructor(res) {
        this.res = res;
        this._data = "";
    }

    data(value) {
        this._data = value;
    }

    SEND_END() {
        log(__filename, "END");
        
        this.res.writeHead(200);
        this.res.end(this._data);
    }
}

module.exports = T200HttpsResponse;