const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomePaging = require('./T200HomePaging.js');

const T200Exchange = require('../models/T200Exchange.js');


class T200HomeExchange extends T200HomePaging {
    constructor(request, cookie, session) {
        super(request, cookie, session);
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
                return self.load_exchange(data);
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


    load_exchange(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let exchange = new T200Exchange();

            return self.load(exchange.merge_select()).then(function(values){
                data.exchanges = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

}

module.exports = T200HomeExchange;