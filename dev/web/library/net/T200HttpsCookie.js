class T200HttpsCookie {
    constructor(req, res) {
        this.req = req;
        this.res = res;

        this.parse();
    }

    set(name, value) {
        this.res.setHeader('Set-cookie', `${name}=${value};`);
    }

    get(name) {
        return this.req.cookie[name];
    }

    #parse() {
        let self = this;
        if(this.req && this.req.headers
            && this.req.headers.cookie){
                this.cookie = {};
                this.req.headers.cookie.split(';').forEach(item => {
                    let cookies = item.split('=');
                    self.cookie[ cookies[0].trim() ] = (cookies[1] || '').trim();
                });
            }else{

            }
    }
}

module.exports = T200HttpsCookie;