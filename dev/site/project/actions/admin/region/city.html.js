const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200City = require('../../../models/T200City.js');
const T200Region = require('../../../models/T200Region.js');
const T200HomeRegion = require('../../../biz/T200HomeRegion.js');

async function do_city_list(request, response, cookie, session, resource) {
    log(__filename, "do_city_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let city = new T200City();
        let HomeRegion = new T200HomeRegion();

        if(HomeRegion.verify_login(cookie, session)){
            city.user_id = session.get("userid");
            if(T200HttpsForm.verify_id(city.user_id)){
                HomeRegion.list(city.merge_select()).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.cities = values;
                    return view.render_file("admin/region/cities.ejs", data).then(function(result){
                        response.type("json");
                        resolve(result);
                    }, function(){
                        reject();
                    });
                }, function(){
                    reject();
                });
            }else{
                reject();
            }
        }else{
            reject();
        }
    });

    return promise;
}

async function do_region_all(request, response, cookie, session, resource) {
    log(__filename, "do_region_all");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let region = new T200Region();
        let HomeRegion = new T200HomeRegion();

        if(HomeRegion.verify_login(cookie, session)){
            if(true){
                HomeRegion.list(region.merge_select()).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.regions = values;
                    return view.render_file("admin/region/all.ejs", data).then(function(result){
                        response.type("json");
                        resolve(result);
                    }, function(){
                        reject();
                    });
                }, function(){
                    reject();
                });
            }else{
                reject();
            }
        }else{
            reject();
        }
    });

    return promise;
}

async function do_city_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeRegion = new T200HomeRegion();

        if(HomeRegion.verify_login(cookie, session)){
            let cid = cookie.get("cid");
            if(cid && 0 < cid){
                do_city_modify(request, response, cookie, session, resource);
            }else{
                do_city_add(request, response, cookie, session, resource).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
                }, function(){
                    reject();
                });
            }
        }else{
            reject();
        }
    });

    return promise;
}

async function do_city_add(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let city = new T200City();
        let HomeRegion = new T200HomeRegion();

        city.region_id = request.get("region_id");
        city.level = request.get("level");
        city.name = request.get("name");
        city.content = request.get("intro");
        
        if(T200HttpsForm.verify_id(city.region_id)
            && T200HttpsForm.verify_id(city.level)
            && T200HttpsForm.verify_text(city.name)
            && T200HttpsForm.verify_text(city.content)){
                city._values = city.values();
                HomeRegion.add(city.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_city_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeRegion = new T200HomeRegion();


    });

    return promise;
}

global.action.use_post('/admin/city/list', do_city_list);
global.action.use_post('/admin/region/all', do_region_all);
global.action.use_post('/admin/city/edit', do_city_edit);

