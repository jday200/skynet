const querystring = require('querystring');

class T200HttpRequest {
    constructor(req) {
        this.request = req;
    }

    create(callback){
        this.request.callback = callback;
        this.request.on('data', this.merge_data);
        this.request.on('end', this.parse_data);
    }

    merge_data(current){
        this.data += current;
    }

    parse_data(){
        this.body = querystring.parse(this.data);
        if(this.callback)this.callback();
    }
}

module.exports = T200HttpRequest;