const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Blog = require('../../models/T200Blog.js');
const T200HomeBlog = require('../../biz/T200HomeBlog.js');


function do_edit_blog(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_blog");

        let blog = new T200Blog();
        let HomeBlog = new T200HomeBlog();

        try{
            let blog_id = request.value("blog_id");

            if(0 < blog_id){
                blog.blog_id = blog_id;
            }

            blog.blog_id = session.get("userid");
            blog.title = request.value('title');
            blog.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < blog.blog_id){
            HomeBlog.modify(blog).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeBlog.add(blog).then(function(){
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


function do_get_blog(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_blog");

        let blog = new T200Blog();
        let HomeBlog = new T200HomeBlog();

        try{
            let blog_id = cookie.get('bid');

            if(!blog_id){
                throw("blog id is null");
            }

            blog.blog_id = blog_id;

        }catch(err){
            throw(err);
        }

        HomeBlog.get(blog).then(function(data){
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


global.action.use_post('/blog/edit_blog', do_edit_blog);
global.action.use_post('/blog/get_blog', do_get_blog);