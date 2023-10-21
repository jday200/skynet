const { log, log_start, log_stop } = require('../../library/lib.js');

const T200Path = require('../../library/fs/T200Path.js');
const T200EJS = require('../../library/T200EJS.js');

const T200Article = require('../models/T200Article.js');
const T200HomeArticle = require('../biz/T200HomeArticle.js');


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

module.exports = { do_index };