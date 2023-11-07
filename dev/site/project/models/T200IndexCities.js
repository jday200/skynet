const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200ModelBase = require('../../library/model/T200ModelBase.js');


class T200IndexCities extends T200ModelBase {
    id;

    city_id;

    intro;
    
    constructor() {
        super();
    }

    merge_list() {
        return `select t1.* from index_cities t1 inner join city t2 on t1.city_id = t2.id order by t1.level`;
    }
}

module.exports = T200IndexCities;