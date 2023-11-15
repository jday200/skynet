const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Admin extends T200ModelBase {
    id;

    user_id;

    status;

    remark;

    permission;

    create_time;

    constructor() {
        super();
        this.status = 0;
        //
        this._table = "city";
        this._key = "id";
        this._id = "id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `user_id, status, remark, permission`;
    }

    values() {
        return `${this.user_id}, ${this.status}, '${this.remark}', '${this.permission}'`;
    }
}

module.exports = T200Admin;