const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Resource = require('../../models/T200Resource.js');
const T200HomeResource = require('../../biz/T200HomeResource.js');


function do_resources(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_resources");

        let EJS = new T200EJS();
        let file = resource.merge_pages('resource/resources.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_resources(data.user_id).then(function(resources){
            data.resources = resources;
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

function get_resources(userid) {
    log(__filename, "get_resources", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let resource = new T200Resource();
        let HomeResource = new T200HomeResource();

        resource.user_id = userid;

        HomeResource.list(resource).then(resolve, reject);
    });

    return promise;
}


function do_remove_resources(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_resources");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_resources(ids).then(function(){
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

function remove_resources(ids) {
    log(__filename, "remove_resources", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let resource = new T200Resource();
        let HomeResource = new T200HomeResource();

        resource.resource_id = ids;

        HomeResource.remove_all(resource).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/resource/resources', do_resources);
global.action.use_post('/resource/remove_resources', do_remove_resources);