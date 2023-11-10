const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Note extends T200ModelBase {
    id;

    user_id;

    title;

    content;

    constructor() {
        super();
        this._table = "note";
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

module.exports = T200Note;