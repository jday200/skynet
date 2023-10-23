const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Traffic = require('../../models/T200Traffic.js');
const T200HomeTraffic = require('../../biz/T200HomeTraffic.js');


function do_traffics(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_traffics");

        let EJS = new T200EJS();
        let file = resource.merge_pages('traffic/traffics.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_traffics(data.user_id).then(function(traffics){
            data.traffics = traffics;
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

function get_traffics(userid) {
    log(__filename, "get_traffics", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let traffic = new T200Traffic();
        let HomeTraffic = new T200HomeTraffic();

        traffic.user_id = userid;

        HomeTraffic.list(traffic).then(resolve, reject);
    });

    return promise;
}


function do_remove_traffics(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_traffics");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_traffics(ids).then(function(){
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

function remove_traffics(ids) {
    log(__filename, "remove_traffics", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let traffic = new T200Traffic();
        let HomeTraffic = new T200HomeTraffic();

        traffic.traffic_id = ids;

        HomeTraffic.remove_all(traffic).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/traffic/traffics', do_traffics);
global.action.use_post('/traffic/remove_traffics', do_remove_traffics);