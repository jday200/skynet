const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200IndexCities extends T200ModelBase {
    id;

    city_id;

    level;

    intro;
    
    constructor() {
        super();
        this.level = 0;
        //
        this._table = "index_cities";
        this._key = "id";
        this._id = "city_id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `city_id, level, intro`;
    }

    values() {
        return `'${this.city_id}', '${this.level}', '${this.intro}'`;
    }

    merge_list() {
        return `select * from index_cities order by level`;
    }
}

module.exports = T200IndexCities;