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
}

module.exports = T200PagingModel;