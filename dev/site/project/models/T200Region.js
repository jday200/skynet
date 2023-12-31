const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Region extends T200ModelBase {
    id;

    name;

    intro;

    constructor() {
        super();
        this._table = "region";
        this._key = "id";
        this._id = "id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `name, content`;
    }

    values() {
        return `'${this.name}', '${this.content}'`;
    }
}

module.exports = T200Region;