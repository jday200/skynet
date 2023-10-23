const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Resource = require('../../models/T200Resource.js');
const T200HomeResource = require('../../biz/T200HomeResource.js');


function do_edit_resource(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_resource");

        let resource = new T200Resource();
        let HomeResource = new T200HomeResource();

        try{
            let resource_id = request.value("resource_id");

            if(0 < resource_id){
                resource.resource_id = resource_id;
            }

            resource.user_id = session.get("userid");
            resource.name = request.value('filename');
            resource.path = request.value('path');
        }catch(err){
            throw(err);
        }

        if(0 < resource.resource_id){
            HomeResource.modify(resource).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeResource.add(resource).then(function(){
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


function do_get_resource(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_resource");

        let resource = new T200Resource();
        let HomeResource = new T200HomeResource();

        try{
            let resource_id = cookie.get('rid');

            if(!resource_id){
                throw("resource id is null");
            }

            resource.resource_id = resource_id;

        }catch(err){
            throw(err);
        }

        HomeResource.get(resource).then(function(data){
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


global.action.use_post('/resource/edit_resource', do_edit_resource);
global.action.use_post('/resource/get_resource', do_get_resource);