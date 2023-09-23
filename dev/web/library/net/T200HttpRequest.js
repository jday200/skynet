const  querystring = require('querystring');


class T200HttpRequest {
    constructor(req, callback) {
        this.request = req;

        console.log(callback);
        req.callback = callback;

        let self = this;
        req.on('data', self.merge_data);
        req.on('end', self.parse_data);
    }

    merge_data(current) {
        this.data += current;
        console.log("merge");
    }

    parse_data() {
        let self = this;
        console.log("parse");
        console.log(self.callback);
        this.body = querystring.parse(this.data);
        if(self.callback)self.callback();
    }

    value(key) {
        return this.request.body[key];
    }

}

module.exports = T200HttpRequest;