const { log, log_start, log_stop } = require('../lib.js');


class T200HttpsCookie {
    constructor(req, res) {
        this.req = req;
        this.res = res;

        this.parse();
    }

    set(name, value) {
        log(__filename, "T200HttpsCookie set", name);
        this.res.setHeader('Set-Cookie', `${name}=${value};`);
    }

    get(name) {
        log(__filename, "T200HttpsCookie get", name);
        return this.cookie[name];
    }

    parse() {
        log(__filename, 'parse cookie', this.req.headers.cookie);
        
        let self = this;
        if(this.req && this.req.headers
            && this.req.headers.cookie){
                this.cookie = {};
                this.req.headers.cookie.split(';').forEach(item => {
                    let cookies = item.split('=');
                    self.cookie[ cookies[0].trim() ] = (cookies[1] || '').trim();
                });
            }else{
                //throw "parse cookie error";
            }
    }
}

module.exports = T200HttpsCookie;