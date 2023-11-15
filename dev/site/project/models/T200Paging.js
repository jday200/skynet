const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Paging extends T200ModelBase {
    constructor() {
        super();
    }

    merge_search(value) {
        return `select * from ${this._table} where match(${this._search}) against('${value}')`;
    }

}

module.exports = T200Paging;