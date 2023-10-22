const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Article = require('../../models/T200Article.js');
const T200HomeArticle = require('../../biz/T200HomeArticle.js');


function do_edit_article(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_article");

        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        try{
            let article_id = request.value("article_id");

            if(0 < article_id){
                article.articleid = article_id;
            }

            article.userid = session.get("userid");
            article.title = request.value('title');
            article.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < article.articleid){
            HomeArticle.modify(article).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeArticle.add(article).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }

    });

    return promise;
}


function do_get_article(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_article");

        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        try{
            let article_id = cookie.get('aid');

            if(!article_id){
                throw("article id is null");
            }

            article.articleid = article_id;

        }catch(err){
            throw(err);
        }

        HomeArticle.get(article).then(function(data){
            response.type('json');
            response.data(data);
            resolve();
        }, function(err){
            response.type("json");
            response.data("failure");
            reject();
        });

    });

    return promise;
}


global.action.use_post('/content/edit_article', do_edit_article);
global.action.use_post('/content/get_article', do_get_article);