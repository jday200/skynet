const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');

const T200PagingBiz = require('./T200PagingBiz.js');


class T200SearchBiz extends T200PagingBiz {
    constructor() {
        super();
    }
}

module.exports = T200SearchBiz;