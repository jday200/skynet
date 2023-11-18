const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Paging extends T200ModelBase {
    constructor() {
        super();
    }

    merge_search_count(value) {
        return `select count(${this._key}) as total from ${this._table} where match(${this._search}) against('${value}')`;
    }

    merge_search(value) {
        return `select * from ${this._table} where match(${this._search}) against('${value}') order by ${this._key} DESC`;
    }

    merge_paging_count() {
        return `select count(${this._key}) as total from ${this._table}`;
    }

    merge_paging(paging) {
        return `select * from ${this._table} order by ${this._key} DESC limit ${this._size} offset ${this._offset}`;
    }

}

module.exports = T200Paging;