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
        console.log("merge_data " + current);
        this.data += current;
    }

    parse_data() {
        console.log("parse_data");
        console.log(this.data);
        this.body = querystring.parse(this.data);
        console.log(this.body);
        if(this.callback)this.callback(this.body);
    }

    value(key) {
        console.log(this.req.body);
        console.log(this.body);
        return this.req.body[key];
    }
}

module.exports = T200HttpsRequest;