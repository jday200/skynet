const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');


class T200HomeTrading extends T200HomeBiz {
    constructor() {
        super();
    }
}

module.exports = T200HomeTrading;