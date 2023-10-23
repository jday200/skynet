const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Traffic = require('../../models/T200Traffic.js');
const T200HomeTraffic = require('../../biz/T200HomeTraffic.js');


function do_edit_traffic(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_traffic");

        let traffic = new T200Traffic();
        let HomeTraffic = new T200HomeTraffic();

        try{
            let traffic_id = request.value("traffic_id");

            if(0 < traffic_id){
                traffic.traffic_id = traffic_id;
            }

            traffic.user_id = session.get("userid");
            traffic.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < traffic.traffic_id){
            HomeTraffic.modify(traffic).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeTraffic.add(traffic).then(function(){
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


function do_get_traffic(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_traffic");

        let traffic = new T200Traffic();
        let HomeTraffic = new T200HomeTraffic();

        try{
            let traffic_id = cookie.get('fid');

            if(!traffic_id){
                throw("traffic id is null");
            }

            traffic.traffic_id = traffic_id;

        }catch(err){
            throw(err);
        }

        HomeTraffic.get(traffic).then(function(data){
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


global.action.use_post('/traffic/edit_traffic', do_edit_traffic);
global.action.use_post('/traffic/get_traffic', do_get_traffic);