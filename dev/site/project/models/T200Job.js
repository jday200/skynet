const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200Forum = require('./T200Forum.js');


class T200Job extends T200Forum {
    id;

    user_id;

    parent_id;

    city_id;

    title;

    content;

    create_time;

    constructor() {
        super();
        this.parent_id = 0;
        this.city_id = 0;
        //
        this._table = "";
        this._key = "id";
        this._id = "user_id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `user_id, parent_id, city_id, title, content`;
    }

    values() {
        return `'${this.user_id}', '${this.parent_id}', '${this.city_id}', '${this.title}', '${this.content}'`;
    }
}

module.exports = T200Job;