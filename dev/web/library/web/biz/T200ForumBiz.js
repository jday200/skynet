const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');

const T200SearchBiz = require('./T200SearchBiz.js');


class T200ForumBiz extends T200SearchBiz {
    constructor() {
        super();
    }
}

module.exports = T200ForumBiz;