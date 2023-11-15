const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Person extends T200ModelBase {
    user_id;

    city_id;

    status;

    username;

    password;

    email;
    
    constructor() {
        super();
        this.city_id = 0;
        this.status = 0;
        //
        this._table = "person";
        this._key = "user_id";
        this._id = "user_id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `username, password, email`;
    }

    values() {
        return `'${this.username}', '${this.password}', '${this.email}'`;
    }

    login_fields() {
        return `username`;
    }

    login_values() {
        return `'${this.username}'`;
    }

    merge_login() {
        return `select user_id from ${this._table} where username = '${this.username}' and password = '${this.password}'`;
    }

    merge_login_update() {
        return `update ${this._table} set username = '${this.username}' where username = '${this.username}'`;
    }

    merge_region(value) {
        return `select city_id from ${this._table} where ${this._key} = ${value} order by ${this._key}`;
    }

    merge_city_update() {
        return `update ${this._table} set city_id = '${this.city_id}' where user_id = '${this.user_id}'`;
    }
}

module.exports = T200Person;