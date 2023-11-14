const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Notice extends T200ModelBase {
    id;

    user_id;

    status;

    title;

    content;

    create_time;

    constructor() {
        super();
        this.status = 0;
        //
        this._table = "notice";
        this._key = "id";
        this._id = "user_id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `user_id, status, title, content`;
    }

    values() {
        return `'${this.user_id}', '${this.status}', '${this.title}', '${this.content}'`;
    }
}

module.exports = T200Notice;