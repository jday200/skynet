const { log, log_start, log_stop } = require('../../../../library/lib.js');

const T200Person = require('../../../models/T200Person.js');
const T200HomePerson = require('../../../biz/T200HomePerson.js');


function do_edit_person(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_person");

        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        try{
            let person_id = request.value("person_id");

            if(0 < person_id){
                person.person_id = person_id;
            }

            person.user_id = session.get("userid");
            person.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < person.person_id){
            HomePerson.modify(person).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomePerson.add(person).then(function(){
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


function do_get_person(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_person");

        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        try{
            let person_id = cookie.get('pid');

            if(!person_id){
                throw("person id is null");
            }

            person.person_id = person_id;

        }catch(err){
            throw(err);
        }

        HomePerson.get(person).then(function(data){
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


global.action.use_post('/admin/person/edit_person', do_edit_person);
global.action.use_post('/admin/person/get_person', do_get_person);