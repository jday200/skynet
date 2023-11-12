const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200Forum = require('./T200Forum.js');


class T200House extends T200Forum {
    id;

    user_id;

    title;

    content;

    constructor() {
        super();
        this._table = "";
        this._key = "id";
        this._id = "user_id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `user_id, title, content`;
    }

    values() {
        return `'${this.user_id}', '${this.title}', '${this.content}'`;
    }
}

module.exports = T200House;