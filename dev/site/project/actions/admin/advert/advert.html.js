const { log, log_start, log_stop } = require('../../../../library/lib.js');

const T200Advert = require('../../../models/T200Advert.js');
const T200HomeAdvert = require('../../../biz/T200HomeAdvert.js');


function do_edit_advert(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_advert");

        let advert = new T200Advert();
        let HomeAdvert = new T200HomeAdvert();

        try{
            let advert_id = request.value("advert_id");

            if(0 < advert_id){
                advert.advert_id = advert_id;
            }

            advert.user_id = session.get("userid");
            advert.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < advert.advert_id){
            HomeAdvert.modify(advert).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeAdvert.add(advert).then(function(){
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


function do_get_advert(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_advert");

        let advert = new T200Advert();
        let HomeAdvert = new T200HomeAdvert();

        try{
            let advert_id = cookie.get('aid');

            if(!advert_id){
                throw("advert id is null");
            }

            advert.advert_id = advert_id;

        }catch(err){
            throw(err);
        }

        HomeAdvert.get(advert).then(function(data){
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


global.action.use_post('/admin/advert/edit_advert', do_edit_advert);
global.action.use_post('/admin/advert/get_advert', do_get_advert);