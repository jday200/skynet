const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200StoreBiz = require('../../library/web/store/T200StoreBase.js');


class T200HomeStore extends T200StoreBiz {
    constructor() {
        super();
    }
    
}

module.exports = T200HomeStore;