const { error, log } = require('../lib.js');
const T200Error = require('../T200Error.js');


class T200ModelBase {
    constructor() {
        this._table = "";
        this._key = "";
        this._id = "";
        this._size = 10;
        this._offset = 0;
        //
        this._fields = "";
        this._values = "";
    }

    merge_select() {
        return `select * from ${this._table} order by ${this._key} limit ${this._size} offset ${this._offset}`;
    }

    merge_insert() {
        return `insert into ${this._table} (${this._fields}) values (${this._values})`;
    }

    merge_update() {
        return `update ${this._table} set (${this._fields}) values (${this._values})`;
    }

    merge_delete() {
        return `delete * from ${this._table}`;
    }

    //
    merge_select_by_key(value) {
        return `select * from ${this._table} where ${this._key} = ${value} order by ${this._key}`;
    }

    merge_select_by_id(value) {
        return `select * from ${this._table} where ${this._id} = ${value} order by ${this._key}`;
    }

    merge_select_by_field(name, value) {
        return `select * from ${this._table} where ${name} = ${value} order by ${this._key}`;
    }

    merge_select_by_fields() {
        return `select * from ${this._table} where username = '${this.username}' and password = '${this.password}'`;
    }
}

module.exports = T200ModelBase;