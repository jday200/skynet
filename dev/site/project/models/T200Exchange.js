const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200Forum = require('./T200Forum.js');


class T200Exchange extends T200Forum {
    id;

    user_id;

    status;

    parent_id;

    title;

    content;

    create_time;

    reply_time;

    constructor() {
        super();
        this.status = 0;
        this.parent_id = 0;
        //
        this._table = "exchange";
        this._key = "id";
        this._id = "user_id";
        //
        this._search = "title, content";
        //
        this._fields = this.fields();
        //this._values = this.values();
    }

    fields() {
        return `user_id, status, parent_id, title, content`;
    }

    values() {
        return `'${this.user_id}', '${this.status}', '${this.parent_id}', '${this.title}', '${this.content}'`;
    }

    merge_list() {
        return `select * from ${this._table} order by id`;
    }
}

module.exports = T200Exchange;