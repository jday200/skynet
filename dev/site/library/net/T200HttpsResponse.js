const { log, log_start, log_stop } = require('../lib.js');


class T200HttpsResponse {
    constructor(res) {
        this.res = res;
        this.parameters = {};
        this._status = 200;
        this._type = "text";
        this._result = false;
        this._data = "failure";
        this.parameters['result'] = "failure";
    }

    type(value) {
        log(__filename, "type", value);
        this._type = value;
    }

    data(value) {
        log(__filename, "set data");
        this._data = value;
        this._result = true;
        this.parameters['data'] = value;
        this.parameters['result'] = "success";
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

        let value = this.merge_result();
        this.res.writeHead(this._status);
        this.res.end(value);
     
    }

    SEND_500() {
        log(__filename, "send 500");
        this.res.writeHead(500);
        this.res.end();
    }

    merge_result() {
        log(__filename, "merge_result");

        let result;

        switch(this._type){
            case 'json':
                result = JSON.stringify(this.parameters);
                this.set('Content-Type', 'text/json');
                break;
            case 'text':
                result = this._data;
                break;
        }
        return result;
    }
}

module.exports = T200HttpsResponse;