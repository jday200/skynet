const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200City extends T200ModelBase {
    id;

    region_id;

    level;

    name;

    content;

    constructor() {
        super();
        this._table = "city";
        this._key = "id";
        this._id = "id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `region_id, level, name, content`;
    }

    values() {
        return `${this.region_id}, ${this.level}, '${this.name}', '${this.content}'`;
    }
}

module.exports = T200City;