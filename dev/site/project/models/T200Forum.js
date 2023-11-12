const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Forum extends T200ModelBase {
    constructor() {
        super();
    }

    merget_forum_list(value) {
        return `select * from ${this._table} where id = ${value} or parent_id = ${value} order by ${this._key} limit ${this._size} offset ${this._offset}`;
    }
}

module.exports = T200Forum;