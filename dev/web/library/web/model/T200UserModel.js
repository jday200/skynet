const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');

const T200ModelBase = require('./T200ModelBase.js');


class T200PagingModel extends T200ModelBase {
    constructor() {
        super();

        this._folio_size = 5;
        this._page_size = 10;
        this._offset = 0;
        //
        this._page;
    }

    merge_login() {
        return `select ${this._key} from ${this._table} where username = '${this.username}' and password = '${this.password}'`;
    }

    merge_login_update() {
        return `update ${this._table} set username = '${this.username}' where username = '${this.username}'`;
    }
}

module.exports = T200PagingModel;