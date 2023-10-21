const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Article = require('../../models/T200Article.js');
const T200HomeArticle = require('../../biz/T200HomeArticle.js');


function do_add_article(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_add_article");

        let article = new T200Article();
        let HomeArticle = new T200HomeArticle();

        try{
            article.userid = session.get("userid");
            article.title = request.value('title');
            article.content = request.value('content');
        }catch(err){
            throw(err);
        }

        HomeArticle.add(article).then(function(){
            response.type('json');
            response.data("success");
            resolve();
        }, function(err){
            response.type("json");
            response.data("failure");
            reject();
        });

    });

    return promise;
}


global.action.use_post('/content/add_article', do_add_article);