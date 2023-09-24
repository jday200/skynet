class T200HttpCookie {
    constructor(req) {
        this.request = req;

        console.log(this.request.headers.cookie);
    }

}

module.exports = T200HttpCookie;
