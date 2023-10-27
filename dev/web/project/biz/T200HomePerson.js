const { error, log } = require('../lib.js');
const T200Error = require('../T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');


class T200HomePerson extends T200HomeBiz {
    constructor() {
        super();
    }

}

module.exports = T200HomePerson;