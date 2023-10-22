const { log, log_start, log_stop } = require('../../library/lib.js');

const T200Path = require('../../library/fs/T200Path.js');
const T200EJS = require('../../library/T200EJS.js');

const T200Advert = require('../models/T200Advert.js');
const T200Person = require('../models/T200Person.js');
const T200Article = require('../models/T200Article.js');
const T200Blog = require('../models/T200Blog.js');
const T200Exchange = require('../models/T200Exchange.js');
const T200House = require('../models/T200House.js');
const T200Job = require('../models/T200Job.js');
const T200Resource = require('../models/T200Resource.js');
const T200Trading = require('../models/T200Trading.js');
const T200Traffic = require('../models/T200Traffic.js');

const T200HomeAdvert = require('../biz/T200HomeAdvert.js');
const T200HomePerson = require('../biz/T200HomePerson.js');
const T200HomeArticle = require('../biz/T200HomeArticle.js');
const T200HomeBlog = require('../biz/T200HomeBlog.js');
const T200HomeExchange = require('../biz/T200HomeExchange.js');
const T200HomeHouse = require('../biz/T200HomeHouse.js');
const T200HomeJob = require('../biz/T200HomeJob.js');
const T200HomeResource = require('../biz/T200HomeResource.js');
const T200HomeTrading = require('../biz/T200HomeTrading.js');
const T200HomeTraffic = require('../biz/T200HomeTraffic.js');


function do_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_index");

        let EJS = new T200EJS();
        let file = resource.merge_pages('index.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        try{
            data.userid = session.get('userid');
        }catch(err){
            data.userid = 0;
        }
    
        get_articles().then(function(articles){
            data.articles = articles;
            return EJS.render_file(real, data);
        }, function(err){
            return error();
        }).then(function(data){
            response.data(data);
            resolve();
        }, function(err){
            reject();
        });
    });

    return promise;
}

function get_articles() {
    log(__filename, "get_articles");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        HomeArticle.list(article).then(resolve, reject);
    });

    return promise;
}

function get_blogs() {
    log(__filename, "get_blogs");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let blog = new T200Blog();
        let HomeBlog = new T200HomeBlog();

        HomeBlog.list(blog).then(resolve, reject);
    });

    return promise;
}

function get_exchanges() {
    log(__filename, "get_exchanges");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        HomeExchange.list(exchange).then(resolve, reject);
    });

    return promise;
}

function get_houses() {
    log(__filename, "get_houses");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        HomeHouse.list(house).then(resolve, reject);
    });

    return promise;
}

function get_jobs() {
    log(__filename, "get_jobs");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        HomeJob.list(job).then(resolve, reject);
    });

    return promise;
}

function get_resources() {
    log(__filename, "get_resources");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let resource = new T200Resource();
        let HomeResource = new T200HomeResource();

        HomeResource.list(resource).then(resolve, reject);
    });

    return promise;
}

function get_tradings() {
    log(__filename, "get_tradings");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        HomeTrading.list(trading).then(resolve, reject);
    });

    return promise;
}

function get_traffics() {
    log(__filename, "get_traffics");
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let traffic = new T200Traffic();
        let HomeTraffic = new T200HomeTraffic();

        HomeTraffic.list(traffic).then(resolve, reject);
    });

    return promise;
}

module.exports = { do_index };