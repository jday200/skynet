const { error, log } = require('../T200Lib.js');
const T200Error = require('../T200Error.js');



class T200HttpsCookie {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    load() {
        log(__filename, "Cookie load");

        let self = this;

        if(this.req){
            if(this.req.headers){
                if(this.req.headers.cookie){
                    this.cookies = {};
                    this.req.headers.cookie.split(';').forEach(item => {
                        let values = item.split('=');
                        self.cookies[ values[0].trim() ] = (values[1] || '').trim();
                    });
                }else{

                }
            }else{
                throw(T200Error.build(1));
            }
        }else{  
            throw(T200Error.build(1));
        }
    }

    set(name, value) {
        log(__filename, "Cookie set", name);
        this.res.setHeader('Set-Cookie', `${name}=${value};`);
    }

    get(name) {
        log(__filename, "Cookie get", name);
        return this.cookies[name];
    }
}

module.exports = T200HttpsCookie;