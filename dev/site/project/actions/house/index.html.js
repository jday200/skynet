const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200House = require('../../models/T200House.js');
const T200HomeHouse = require('../../biz/T200HomeHouse.js');


function do_houses(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_houses");

        let EJS = new T200EJS();
        let file = resource.merge_pages('house/houses.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_houses(data.user_id).then(function(houses){
            data.houses = houses;
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

function get_houses(userid) {
    log(__filename, "get_houses", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        house.user_id = userid;

        HomeHouse.list(house).then(resolve, reject);
    });

    return promise;
}


function do_remove_houses(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_houses");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_houses(ids).then(function(){
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

function remove_houses(ids) {
    log(__filename, "remove_houses", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        house.house_id = ids;

        HomeHouse.remove_all(house).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/house/houses', do_houses);
global.action.use_post('/house/remove_houses', do_remove_houses);