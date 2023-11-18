const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200Paging = require('./T200Paging.js');


class T200Forum extends T200Paging {
    constructor() {
        super();
    }

    merget_forum_list(value) {
        return `select * from ${this._table} where id = ${value} or parent_id = ${value} order by ${this._key} limit ${this._size} offset ${this._offset}`;
    }
}

module.exports = T200Forum;