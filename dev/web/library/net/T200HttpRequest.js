class T200HttpRequest {
    constructor(req) {
        this.request = req;
        this.get = {};
        this.post = {};
    }

    use_get(action, callback) {
        this.get[action] = callback;
    }

    use_post(action, callback) {
        this.post[action] = callback;
    }
}

module.exports = T200HttpRequest;