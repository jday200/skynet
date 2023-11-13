const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');
const T200IndexCities = require('../models/T200IndexCities.js');
const T200House = require('../models/T200House.js');

class T200HomeHouse extends T200HomeBiz {
    constructor() {
        super();
    }


    load_index() {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = {};

            self.load_cities(data).then(function(){

            }, function(){
                return error();
            }).then(function(){
                return self.load_house_rents(data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_house_wanted(data);
            }, function(){
                return error();
            }).then(function(){
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

    load_house_rents(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let house = new T200House();
            house._table = "house_rent";
            return self.load(house.merge_select()).then(function(values){
                data.house_rents = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_house_wanted(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let house = new T200House();
            house._table = "house_wanted";
            return self.load(house.merge_select()).then(function(values){
                data.house_wanteds = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }


}

module.exports = T200HomeHouse;