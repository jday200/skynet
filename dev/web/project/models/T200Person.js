const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeModel = require('./T200HomeModel.js');


class T200Person extends T200HomeModel {
    constructor() {
        super();
    }
}

module.exports = T200Person;