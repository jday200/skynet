const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');
const T200House = require('../models/T200House.js');
const T200Job = require('../models/T200Job.js');
const T200Trading = require('../models/T200Trading.js');
const T200Exchange = require('../models/T200Exchange.js');


class T200HomeRegion extends T200HomeBiz {
    constructor() {
        super();
    }


    load_index() {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = {};

            self.load_house_rents(data).then(function(){

            }, function(){
                return error();
            }).then(function(){
                return self.load_house_wanted(data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_job_recruits(data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_job_wanteds(data);
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

    load_job_recruits(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let job = new T200Job();
            job._table = "job_recruit";
            return self.load(job.merge_select()).then(function(values){
                data.job_recruits = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_job_wanteds(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let job = new T200Job();
            job._table = "job_wanted";
            return self.load(job.merge_select()).then(function(values){
                data.job_wanteds = values;
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




    load_city_index(id) {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = {};

            self.load_house_rents(id, data).then(function(){

            }, function(){
                return error();
            }).then(function(){
                return self.load_house_wanted(id, data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_job_recruits(id, data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_job_wanteds(id, data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_trading_sells(id, data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_trading_buys(id, data);
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

    load_house_rents(id, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let house = new T200House();
            house._table = "house_rent";
            return self.load(house.merge_select_by_field("city_id", id)).then(function(values){
                data.house_rents = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_house_wanted(id, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let house = new T200House();
            house._table = "house_wanted";
            return self.load(house.merge_select_by_field("city_id", id)).then(function(values){
                data.house_wanteds = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_job_recruits(id, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let job = new T200Job();
            job._table = "job_recruit";
            return self.load(job.merge_select_by_field("city_id", id)).then(function(values){
                data.job_recruits = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_job_wanteds(id, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let job = new T200Job();
            job._table = "job_wanted";
            return self.load(job.merge_select_by_field("city_id", id)).then(function(values){
                data.job_wanteds = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_trading_sells(id, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let trading = new T200Trading();
            trading._table = "trading_sell";
            return self.load(trading.merge_select_by_field("city_id", id)).then(function(values){
                data.trading_sells = values;
                resolve(data);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    load_trading_buys(id, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let trading = new T200Trading();
            trading._table = "trading_buy";
            return self.load(trading.merge_select_by_field("city_id", id)).then(function(values){
                data.trading_buys = values;
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

module.exports = T200HomeRegion;