const T200Error = require('../../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../../library/lib.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200Person extends T200ModelBase {
    user_id;

    username;

    password;

    email;
    
    constructor() {
        super();
        this._table = "person";
        this._key = "user_id";
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
        return `select * from ${this._table} where username = '${this.username}' and password = '${this.password}'`;
    }

    merge_login_update() {
        return `update ${this._table} set username = '${this.username}'`;
    }
}

module.exports = T200Person;