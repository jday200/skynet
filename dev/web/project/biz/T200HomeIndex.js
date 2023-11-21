const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeVisitorBiz = require('./T200HomeVisitorBiz.js');

const T200Notice = require('../models/T200Notice.js')


class T200HomeIndex extends T200HomeVisitorBiz {
    constructor() {
        super();
    }

    load_index() {
        log(__filename, "load");
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = {};

            self.load_notices(data).then(function(){

            }, function(err){
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

    
    load_notices(data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let notice = new T200Notice();

            notice._fields = notice.list_fields();
            notice._order_direction = "DESC";
            return self.load(notice.merge_list()).then(function(notices){
                data.notices = notices;
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
}

module.exports = T200HomeIndex;