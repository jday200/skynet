class T200HttpsAction {
    constructor() {
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

module.exports = T200HttpsAction;