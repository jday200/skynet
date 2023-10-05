class T200HttpCookie {
    constructor(req, res) {
        this.request = req;
        this.response = res;

        this.parse();
    }

    set(name, value){
        this.response.setHeader('Set-cookie', `${name}=${value};`);
    }

    get(name){
        console.log(this.request.headers);
        console.log(this.request.cookie);
        return this.request.cookie[name];
    }

    parse() {
        let self = this;
        if(this.request && this.request.headers 
            && this.request.headers.cookie){
                this.request.cookie = {};
                this.request.headers.cookie.split(';').forEach(item => {
                    let  cookies = item.split('=');
                    self.request.cookie[ cookies[0].trim() ] = (cookies[1] || '').trim();
                });
            }else{

            }
    }
}

module.exports = T200HttpCookie;