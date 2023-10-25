const { log, log_start, log_stop } = require('../../../../library/lib.js');

const T200Path = require('../../../../library/fs/T200Path.js');
const T200EJS = require('../../../../library/T200EJS.js');

const T200Advert = require('../../../models/T200Advert.js');
const T200HomeAdvert = require('../../../biz/T200HomeAdvert.js');


function do_adverts(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_adverts");

        let EJS = new T200EJS();
        let file = resource.merge_pages('admin/advert/adverts.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_adverts(data.user_id).then(function(adverts){
            data.adverts = adverts;
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

function get_adverts(userid) {
    log(__filename, "get_adverts", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let advert = new T200Advert();
        let HomeAdvert = new T200HomeAdvert();

        advert.user_id = userid;

        HomeAdvert.list(advert).then(resolve, reject);
    });

    return promise;
}


function do_remove_adverts(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_adverts");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_adverts(ids).then(function(){
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

function remove_adverts(ids) {
    log(__filename, "remove_adverts", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let advert = new T200Advert();
        let HomeAdvert = new T200HomeAdvert();

        advert.advert_id = ids;

        HomeAdvert.remove_all(advert).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/admin/advert/adverts', do_adverts);
global.action.use_post('/admin/advert/remove_adverts', do_remove_adverts);