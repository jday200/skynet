const { log, log_start, log_stop } = require('../lib.js');
const querystring = require('querystring');

class T200HttpsRequest {
    constructor(req) {
        this.req = req;
    }

    load(callback) {
        let self = this;
        self.req.callback = callback;
        self.req.on('data', self.merge_data);
        self.req.on('end', self.parse_data);
    }    
    
    merge_data(current) {
        log(__filename, "merge_data", current);
        this.data += current;
    }

    parse_data() {
        log(__filename, "parse_data", this.data);
        this.body = querystring.parse(this.data);
        if(this.callback)this.callback(this.body);
    }

    value(key) {
        log(__filename, "T200HttpsRequest value", key);
        return this.req.body[key];
    }
}

module.exports = T200HttpsRequest;