const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Blog = require('../../models/T200Blog.js');
const T200HomeBlog = require('../../biz/T200HomeBlog.js');


function do_blogs(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_blogs");

        let EJS = new T200EJS();
        let file = resource.merge_pages('content/blogs.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_blogs(data.user_id).then(function(blogs){
            data.blogs = blogs;
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

function get_blogs(userid) {
    log(__filename, "get_blogs", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let blog = new T200Blog();
        let HomeBlog = new T200HomeBlog();

        blog.user_id = userid;

        HomeBlog.list(blog).then(resolve, reject);
    });

    return promise;
}


function do_remove_blogs(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_blogs");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_blogs(ids).then(function(){
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

function remove_blogs(ids) {
    log(__filename, "remove_blogs", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let blog = new T200Blog();
        let HomeBlog = new T200HomeBlog();

        blog.blog_id = ids;

        HomeBlog.remove_all(blog).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/blog/blogs', do_blogs);
global.action.use_post('/blog/remove_blogs', do_remove_blogs);