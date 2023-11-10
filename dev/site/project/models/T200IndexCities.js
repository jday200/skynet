const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200IndexCities extends T200ModelBase {
    id;

    city_id;

    intro;
    
    constructor() {
        super();
        this._table = "index_cities";
        this._key = "id";
        this._id = "city_id";
        //
        this._fields = this.fields();
    }

    fields() {
        return `city_id, intro`;
    }

    values() {
        return `'${this.city_id}', '${this.intro}'`;
    }

    merge_list() {
        return `select t1.* from index_cities t1 inner join city t2 on t1.city_id = t2.id order by t1.level`;
    }
}

module.exports = T200IndexCities;