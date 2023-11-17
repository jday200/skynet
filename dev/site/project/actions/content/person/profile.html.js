const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Person = require('../../../models/T200Person.js');
const T200HomePerson = require('../../../biz/T200HomePerson.js');


async function do_person_profile(request, response, cookie, session, resource) {
    log(__filename, "do_person_profile");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            if(T200HttpsForm.verify_id(person.user_id)){
                HomePerson.list(person.merge_select_by_id(person.user_id)).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.person = values[0];
                    return view.render_file("content/person/profile.ejs", data).then(function(result){
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

async function do_person_nickname_save(request, response, cookie, session, resource) {
    log(__filename, "do_person_region_save");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            person.city_id = request.get("city");
            if(T200HttpsForm.verify_id(person.user_id)
                && T200HttpsForm.verify_id(person.city_id)){
                HomePerson.modify(person.merge_city_update()).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
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

async function do_person_password_save(request, response, cookie, session, resource) {
    log(__filename, "do_person_password_save");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            person.city_id = request.get("city");
            if(T200HttpsForm.verify_id(person.user_id)
                && T200HttpsForm.verify_id(person.city_id)){
                HomePerson.modify(person.merge_city_update()).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
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


async function do_person_email_save(request, response, cookie, session, resource) {
    log(__filename, "do_person_email_save");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            person.city_id = request.get("city");
            if(T200HttpsForm.verify_id(person.user_id)
                && T200HttpsForm.verify_id(person.city_id)){
                HomePerson.modify(person.merge_city_update()).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
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



async function do_person_nationality_save(request, response, cookie, session, resource) {
    log(__filename, "do_person_password_save");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            person.city_id = request.get("city");
            if(T200HttpsForm.verify_id(person.user_id)
                && T200HttpsForm.verify_id(person.city_id)){
                HomePerson.modify(person.merge_city_update()).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
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


async function do_person_location_save(request, response, cookie, session, resource) {
    log(__filename, "do_person_location_save");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            person.city_id = request.get("city");
            if(T200HttpsForm.verify_id(person.user_id)
                && T200HttpsForm.verify_id(person.city_id)){
                HomePerson.modify(person.merge_city_update()).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
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


async function do_person_intro_save(request, response, cookie, session, resource) {
    log(__filename, "do_person_password_save");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            person.user_id = session.get("userid");
            person.city_id = request.get("city");
            if(T200HttpsForm.verify_id(person.user_id)
                && T200HttpsForm.verify_id(person.city_id)){
                HomePerson.modify(person.merge_city_update()).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
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


global.action.use_post('/content/person/region', do_person_region);
global.action.use_post('/content/person/profile', do_person_profile);

global.action.use_post('/content/person/nickname/save', do_person_nickname_save);
global.action.use_post('/content/person/password/save', do_person_password_save);
global.action.use_post('/content/person/email/save', do_person_email_save);
global.action.use_post('/content/person/nationality/save', do_person_nationality_save);
global.action.use_post('/content/person/location/save', do_person_location_save);
global.action.use_post('/content/person/intro/save', do_person_intro_save);


