const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');
const T200IndexCities = require('../models/T200IndexCities.js');


class T200HomeIndex extends T200HomeBiz {
    constructor() {
        super();
    }

    load_index() {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = {};

            //
            data.house_rents = new Array();
            data.house_wanteds = new Array();
            data.job_recruits = new Array();
            data.job_wanteds = new Array();

            self.load_cities(data).then(function(){
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_cities(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let IndexCities = new T200IndexCities();

            return self.load(IndexCities.merge_list()).then(function(cities){
                data.index_cities = cities;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }
}

module.exports = T200HomeIndex;