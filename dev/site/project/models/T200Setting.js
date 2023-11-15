const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Admin extends T200ModelBase {
    id;

    setting_id;

    status;

    name;

    content;

    modify_time;

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
        return `setting_id, status, name, content`;
    }

    values() {
        return `${this.setting_id}, ${this.status}, '${this.name}', '${this.content}'`;
    }
}

module.exports = T200Setting;