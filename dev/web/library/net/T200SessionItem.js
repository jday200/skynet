const T200Error = require('../T200Error.js');
const { error, log, log_start, log_stop } = require('../lib.js');


class T200SessionItem {
    constructor() {
        this._secret = "";
        this._name = "";
        this._resave = false;
        this._save_uninitialized = false;
        this._cookie = "";
    }
}

module.exports = T200SessionItem;