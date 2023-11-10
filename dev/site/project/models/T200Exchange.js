const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Exchange extends T200ModelBase {
    id;

    user_id;

    title;

    content;

    constructor() {
        super();
        this._table = "exchange";
        this._key = "id";
        this._id = "user_id";
        //
        this._fields = this.fields();
        //this._values = this.values();
    }

    fields() {
        return `user_id, title, content`;
    }

    values() {
        return `'${this.user_id}', '${this.title}', '${this.content}'`;
    }

    merge_list() {
        return `select t1.* from ${this._table} t1 inner join city t2 on t1.city_id = t2.id order by t1.level`;
    }
}

module.exports = T200Exchange;