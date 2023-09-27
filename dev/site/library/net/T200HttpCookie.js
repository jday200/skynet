class T200HttpCookie {
    constructor(req, res) {
        this.request = req;
        this.response = res;
    }

    set(name, value){
        this.response.setHeader('Set-cookie', `${name}=${value};`);
    }

    get(name){
        return this.cookie[name];
    }
}

module.exports = T200HttpCookie;