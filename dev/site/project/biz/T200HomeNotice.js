const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomePaging = require('./T200HomePaging.js');


class T200HomeNotice extends T200HomePaging {
    constructor(request, cookie, session) {
        super(request, cookie, session);
    }

}

module.exports = T200HomeNotice;