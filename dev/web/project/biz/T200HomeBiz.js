const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ForumBiz = require('../../library/web/biz/T200ForumBiz.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeBiz extends T200ForumBiz {
    constructor() {
        super();
        this.store = new T200HomeStore();
    }
}

module.exports = T200HomeBiz;