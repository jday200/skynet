const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');
const T200IndexCities = require('../models/T200IndexCities.js');
const T200Trading = require('../models/T200Trading.js');


class T200HomeTrading extends T200HomeBiz {
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
                return self.load_trading_sells(data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_trading_buys(data);
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

    load_trading_sells(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let trading = new T200Trading();
            trading._table = "trading_sell";
            return self.load(trading.merge_select()).then(function(values){
                data.trading_sells = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_trading_buys(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let trading = new T200Trading();
            trading._table = "trading_buy";
            return self.load(trading.merge_select()).then(function(values){
                data.trading_buys = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }
}

module.exports = T200HomeTrading;