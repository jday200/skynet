const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200House = require('../../../models/T200House.js');
const T200HomeHouse = require('../../../biz/T200HomeHouse.js');

async function do_house_wanted_list(request, response, cookie, session, resource) {
    log(__filename, "do_house_wanted_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        if(HomeHouse.verify_login(cookie, session)){
            if(true){
                house._table = "house_wanted";
                HomeHouse.list(house.merge_select()).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.houses = values;
                    return view.render_file("admin/house/wanted.ejs", data).then(function(result){
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

global.action.use_post('/admin/house/wanted/list', do_house_wanted_list);

