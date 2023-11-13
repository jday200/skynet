const { error, log } = require('../../../library/T200Lib.js');
const T200Error = require('../../../library/T200Error.js');

const T200View = require('../../../library/view/T200View.js');
const T200HttpsForm = require('../../../library/net/T200HttpsForm.js');
const T200House = require('../../models/T200House.js');
const T200HomeHouse = require('../../biz/T200HomeHouse.js');

async function do_house_list(request, response, cookie, session, resource) {
    log(__filename, "do_house_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house = new T200House();
        let HomeHouse = new T200HomeHouse();

        if(HomeHouse.verify_login(cookie, session)){
            house.user_id = session.get("userid");
            let id = cookie.get("hid");
            if(T200HttpsForm.verify_id(id._value)){
                house._table = "house_rent";
                HomeHouse.list(house.merget_forum_list(id._value)).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.houses = values;
                    return view.render_file("house/houses.ejs", data).then(function(result){
                        response.type("json");
                        resolve(result);
                    }, function(){
                        reject();
                    });
                }, function(err){
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

global.action.use_post('/house/list', do_house_list);

