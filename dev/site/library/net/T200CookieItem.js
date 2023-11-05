const { error, log } = require('../T200Lib.js');
const T200Error = require('../T200Error.js');


class T200CookieItem {
    constructor() {
        this._expires = 0;
        this._max_age = 0;
        this._domain = "";
        this._path = "";
        this._http_only = false;
        this._secure = false;
    }
}

module.exports = T200CookieItem;