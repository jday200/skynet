const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200AdminBiz = require('../../library/web/biz/T200AdminBiz.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeAdminBiz extends T200AdminBiz {
    constructor() {
        super();
        this.store = new T200HomeStore();
    }
}

module.exports = T200HomeAdminBiz;