const { error, log } = require('../../library/lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200HouseRent extends T200ModelBase {
    id;

    user_id;

    title;

    content;
    
    constructor() {
        super();
        this._table = "house_rent";
        this._key = "id";
        this._id = "user_id";

        //this._fields = this.fields();
        //this._values = this.values();
    }   

    fields() {
        return `title, content, user_id`;
    }

    values() {
        return `'${this.title}', '${this.content}', ${this.user_id}`;
    }
}

module.exports = T200HouseRent;