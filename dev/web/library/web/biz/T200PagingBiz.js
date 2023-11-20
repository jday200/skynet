const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');

const T200BizBase = require('./T200BizBase.js');


class T200PagingBiz extends T200BizBase {
    constructor() {
        super();
    }
}

module.exports = T200PagingBiz;