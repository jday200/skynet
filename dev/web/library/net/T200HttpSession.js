class T200HttpSession {
    constructor(req) {
        this.request = req;
    }

    create() {
        this.request.session = {};
        this.request.session['1'] = 1;
    }
}

module.exports = T200HttpSession;