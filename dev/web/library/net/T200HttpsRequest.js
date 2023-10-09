const querystring = require('querystring');


class T200HttpsRequest {
    constructor(req) {
        this.req = req;
    }

    load() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.req.on('data', self.merge_data);
            self.req.on('end', self.parse_data(resolve));
        });

        return promise;
    }

    merge_data(current) {
        debugger;
        this.data += current;
    }

    parse_data(callback) {
        debugger;
        this.body = querystring.parse(this.data);
        console.log(this.body);
        if(callback)callback(this.body);
    }

    value(key) {
        console.log(this.req.body);
        console.log(this.body);
        return this.req.body[key];
    }
}

module.exports = T200HttpsRequest;