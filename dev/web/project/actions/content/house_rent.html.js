const { error, log } = require('../../../library/lib.js');
const T200Error = require('../../../library/T200Error.js');

const T200HttpsForm = require('../../../library/net/T200HttpsForm.js');

const T200HouseRent = require('../../models/T200HouseRent.js');
const T200HomeHouse = require('../../biz/T200HomeHouse.js');


function do_house_rent_add(request, response, cookie, session, resource) {
    log(__filename, "do_house_rent_add");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let house_rent = new T200HouseRent();
        let HomeHouse = new T200HomeHouse();

        if(HomeHouse.verify_login(cookie, session)){
            house_rent.user_id = session.get("userid");
            house_rent.title = request.get("title");
            house_rent.content = request.get("content");
    
            if(T200HttpsForm.verify_text(house_rent.title)
                && T200HttpsForm.verify_text(house_rent.content)){
                    house_rent._fields = house_rent.fields();
                    house_rent._values = house_rent.values();
                    HomeHouse.add(house_rent.merge_insert()).then(function(){
                        resolve();
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



global.action.use_post('/content/house_rent_add', do_house_rent_add);