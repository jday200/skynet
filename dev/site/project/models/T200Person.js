const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

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
        return `select * from ${this._table} where username = '${this.username}' and password = '${this.password}'`;
    }

    merge_login_update() {
        return `update ${this._table} set username = '${this.username}' where username = '${this.username}'`;
    }
}

module.exports = T200Person;