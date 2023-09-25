class T200HttpCookie {
    constructor(req, res) {
        this.request = req;
        this.response = res;

        console.log(this.request.headers);
        console.log(this.request.headers.cookie);
    }

    set(name, value) {
        this.response.setHeader('Set-Cookie', `${name}=${value};`);
    }

    get(name) {

    }

}

module.exports = T200HttpCookie;
