const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Region = require('../../../models/T200Region.js');
const T200HomeRegion = require('../../../biz/T200HomeRegion.js');

async function do_region_list(request, response, cookie, session, resource) {
    log(__filename, "do_region_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let region = new T200Region();
        let HomeRegion = new T200HomeRegion();

        if(HomeRegion.verify_login(cookie, session)){
            region.user_id = session.get("userid");
            if(T200HttpsForm.verify_id(region.user_id)){
                HomeRegion.list(region.merge_select()).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.regions = values;
                    return view.render_file("admin/region/regions.ejs", data).then(function(result){
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

global.action.use_post('/admin/region/list', do_region_list);

