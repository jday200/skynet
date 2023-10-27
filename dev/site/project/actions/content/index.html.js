const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Article = require('../../models/T200Article.js');
const T200HomeArticle = require('../../biz/T200HomeArticle.js');


function do_articles(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_articles");

        let EJS = new T200EJS();
        let file = resource.merge_pages('content/articles.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.userid = session.get('userid');

        get_articles(data.userid).then(function(articles){
            data.articles = articles;
            return EJS.render_file(real, data);
        }, function(err){
            console.log(err);
            return error();
        }).then(function(data){
            response.type('json');
            response.data(data);
            resolve();
        }, function(err){
            response.type('json');
            console.log(err);
            reject();
        });
    });

    return promise;
}

function get_articles(userid) {
    log(__filename, "get_articles", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        article.userid = userid;

        HomeArticle.list(article).then(resolve, reject);
    });

    return promise;
}


function do_remove_articles(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_articles");

        let data = {};

        data.userid = session.get('userid');

        let ids = request.value('ids');

        remove_articles(ids).then(function(){
            response.type('json');
            response.data("success");
            resolve();
        }, function(err){
            response.type('json');
            reject();
        });
    });

    return promise;
}

function remove_articles(ids) {
    log(__filename, "remove_articles", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        article.articleid = ids;

        HomeArticle.remove_all(article).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/content/articles', do_articles);
global.action.use_post('/content/remove_articles', do_remove_articles);