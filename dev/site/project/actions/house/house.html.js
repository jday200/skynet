const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200House = require('../../models/T200House.js');
const T200HomeHouse = require('../../biz/T200HomeHouse.js');


function do_edit_house(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_house");

        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        try{
            let house_id = request.value("house_id");

            if(0 < house_id){
                house.house_id = house_id;
            }

            house.user_id = session.get("userid");
            house.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < house.house_id){
            HomeHouse.modify(house).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeHouse.add(house).then(function(){
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


function do_get_house(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_house");

        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        try{
            let house_id = cookie.get('hid');

            if(!house_id){
                throw("house id is null");
            }

            house.house_id = house_id;

        }catch(err){
            throw(err);
        }

        HomeHouse.get(house).then(function(data){
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


global.action.use_post('/house/edit_house', do_edit_house);
global.action.use_post('/house/get_house', do_get_house);