const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Job extends T200ModelBase {
    id;

    name;

    content;

    constructor() {
        super();
        this._table = "city";
        this._key = "id";
    }
}

module.exports = T200Job;