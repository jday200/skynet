const { error } = require('../../library/error.js');
const T200Path = require('../../library/fs/T200Path.js');
const T200EJS = require('../../library/T200EJS.js');

const T200Article = require('../models/T200Article.js');
const T200HomeArticle = require('../biz/T200HomeArticle.js');


function do_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        console.log('do_index');

        let EJS = new T200EJS();
        let file = resource.merge_pages('body.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.name = session.get('name');

        get_articles().then(function(articles){
            console.log('get_articles');
            data.articles = articles;
            return EJS.render_file(real, data);
        }, function(err){
            console.log('get_articles error');
            return error();
        }).then(function(data){
            console.log('render');
            resolve(data);
        }, function(err){
            console.log('render error');
            reject(err);
        });

    });

    return promise;
}

function get_articles() {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        HomeArticle.list(article).then(resolve, reject);
    });

    return promise;
}

module.exports = { do_index : do_index };