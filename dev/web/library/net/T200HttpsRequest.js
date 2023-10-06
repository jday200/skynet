const querystring = require('querystring');


class T200HttpsRequest {
    constructor(req) {
        this.request = req;
    }

    load() {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.request.on('data', self.merge_data);
            self.request.on('end', self.parse_data(resolve));
        });

        return promise;
    }

    merge_data(current) {
        this.data += current;
    }

    parse_data(callback) {
        this.body = querystring.parse(this.data);
        if(callback)callback(this.body);
    }
}

module.exports = T200HttpsRequest;