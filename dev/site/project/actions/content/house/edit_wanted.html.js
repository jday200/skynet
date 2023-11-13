const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200House = require('../../../models/T200House.js');
const T200HomeHouse = require('../../../biz/T200HomeHouse.js');

const T200Person = require('../../../models/T200Person.js');
const T200HomePerson = require('../../../biz/T200HomePerson.js');

async function do_house_wanted_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeHouse = new T200HomeHouse();

        if(HomeHouse.verify_login(cookie, session)){
            let hid = cookie.get("hid");
            if(hid && 0 < hid){
                do_house_wanted_modify(request, response, cookie, session, resource);
            }else{
                do_house_wanted_add(request, response, cookie, session, resource).then(function(result){
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

async function do_house_wanted_add(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        house.user_id = session.get("userid");
        house.city_id = request.get("city_id");
        house.title = request.get("title");
        house.content = request.get("content");
        
        if(T200HttpsForm.verify_id(house.user_id)
            && T200HttpsForm.verify_id(house.city_id)
            && T200HttpsForm.verify_text(house.title)
            && T200HttpsForm.verify_text(house.content)){
                house._table = "house_wanted";
                house._values = house.values();
                HomeHouse.add(house.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_house_wanted_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeHouse = new T200HomeHouse();


    });

    return promise;
}


async function do_house_region(request, response, cookie, session, resource) {
    log(__filename, "do_house_region");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            let user_id = session.get("userid");

            if(T200HttpsForm.verify_id(user_id)){
                let user = new T200Person();
                HomePerson.load(user.merge_region(user_id)).then(function(data){
                    response.type("json");
                    resolve(data);
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


global.action.use_post('/content/house/wanted/edit', do_house_wanted_edit);
global.action.use_post('/content/house/region', do_house_region);

