const { log, log_start, log_stop } = require('../lib.js');


class T200HttpsResponse {
    constructor(res) {
        this.res = res;
        this.parameters = {};
        this._status = 200;
        this._type = "text";
        this._result = false;
        //this._data = {};
    }

    data(value) {
        log(__filename, "set data");
        this._data = value;
        this._result = true;
    }

    status(value) {
        log(__filename, "set status", value);
        this._status = value;
    }

    set(name, value) {
        log(__filename, "set", name);
        this.res.setHeader(name, value);
    }

    SEND_END() {
        log(__filename, "send end");

        if(this._result){
            let value = this.merge_result();
            this.res.end(value);
        }else{
            this.res.end();
        }        
    }

    SEND_500() {
        log(__filename, "send 500");
        this.res.writeHead(500);
        this.res.end();
    }

    merge_result() {
        log(__filename, "merge_result");
        return this._data;
    }
}

module.exports = T200HttpsResponse;