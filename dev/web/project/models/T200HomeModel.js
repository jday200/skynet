const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ForumModel = require('../../library/web/model/T200ForumModel.js');


class T200HomeModel extends T200ForumModel {
    constructor() {
        super();
    }
}

module.exports = T200HomeModel;