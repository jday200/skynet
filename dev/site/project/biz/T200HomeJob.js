const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');
const T200IndexCities = require('../models/T200IndexCities.js');
const T200Job = require('../models/T200Job.js');


class T200HomeJob extends T200HomeBiz {
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
                return self.load_job_recruits(data);
            }, function(){
                return error();
            }).then(function(){
                return self.load_job_wanteds(data);
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

}

module.exports = T200HomeJob;