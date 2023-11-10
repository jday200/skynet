const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200City = require('../../../models/T200City.js');
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

global.action.use_post('/admin/city/list', do_city_list);

