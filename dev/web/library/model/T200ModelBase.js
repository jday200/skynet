const { error, log } = require('../lib.js');
const T200Error = require('../T200Error.js');


class T200ModelBase {
    constructor() {
        this._table = "";
        this._key = "";
        this._id = "";
        this._size = 10;
        this._offset = 0;
    }

    merge_select() {
        return `select * from ${this._table} order by ${this._key} limit ${this._size} offset ${this._offset}`;
    }

    merge_insert() {
        return `insert into ${this._table} () values ()`;
    }

    merge_update() {
        return `update ${this._table} set `;
    }

    merge_delete() {
        return `delete * from ${this._table}`;
    }
}

module.exports = T200ModelBase;