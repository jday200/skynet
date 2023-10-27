const T200Error = require('../T200Error.js');
const { error, log, log_start, log_stop } = require('../lib.js');

const querystring = require('querystring');


class T200HttpsRequest {
    constructor(req) {
        this.events = {};
        this.req = req;
        this.req.events = {};
        req.on('data', this.merge_data);
        req.on('end', this.parse_data);
    }

    on(name, callback) {
        log(__filename, "on", name);
        this.req.events[name] = callback;
    }

    merge_data(current) {
        log(__filename, "merge_data", current);
        this.data += current;
    }

    parse_data() {
        log(__filename, "parse_data", this.data);
        this.values = querystring.parse(this.data);
        let load = this.events['load'];

        if(load){
            log(__filename, "call load");
            load();
        }
    }

    get(name) {
        log(__filename, "Request get", name);
        return this.req.values[name];
    }
}

module.exports = T200HttpsRequest;