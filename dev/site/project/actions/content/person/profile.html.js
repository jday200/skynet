const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Person = require('../../../models/T200Person.js');
const T200HomePerson = require('../../../biz/T200HomePerson.js');

async function do_person_region(request, response, cookie, session, resource) {
    log(__filename, "do_person_region");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            if(true){
                //HomePerson.list(person.merge_select_by_id(person.user_id)).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    //data.persons = values;
                    return view.render_file("content/person/region.ejs", data).then(function(result){
                        response.type("json");
                        resolve(result);
                    }, function(){
                        reject();
                    });
                //}, function(){
                //   reject();
                //});
            }else{
                reject();
            }
        }else{
            reject();
        }
    });

    return promise;
}

global.action.use_post('/content/person/region', do_person_region);

