const { error, log } = require('../../library/lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');
const T200HouseRent = require('../models/T200HouseRent.js');

class T200HomeIndex extends T200HomeBiz {
    constructor() {
        super();
    }

    load_index() {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = {};
            data.house_rents = {};

            let HouseRent = new T200HouseRent();

            return self.load(HouseRent.merge_select()).then(function(house_rents){
                data.house_rents = house_rents;
                resolve(data);
            }, function(){
                return error();
            });
        });

        return promise;
    }
}

module.exports = T200HomeIndex;