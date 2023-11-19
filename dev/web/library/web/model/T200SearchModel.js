const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');

const T200PagingModel = require('./T200PagingModel.js');


class T200SearchModel extends T200PagingModel {
    constructor() {
        super();
        this._search = "";
    }
}

module.exports = T200SearchModel;