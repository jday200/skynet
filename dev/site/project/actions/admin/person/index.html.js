const { log, log_start, log_stop } = require('../../../../library/lib.js');

const T200Path = require('../../../../library/fs/T200Path.js');
const T200EJS = require('../../../../library/T200EJS.js');

const T200Person = require('../../../models/T200Person.js');
const T200HomePerson = require('../../../biz/T200HomePerson.js');


function do_persons(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_persons");

        let EJS = new T200EJS();
        let file = resource.merge_pages('admin/person/persons.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_persons(data.user_id).then(function(persons){
            data.persons = persons;
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

function get_persons(userid) {
    log(__filename, "get_persons", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.user_id = userid;

        HomePerson.list(person).then(resolve, reject);
    });

    return promise;
}


function do_remove_persons(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_persons");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_persons(ids).then(function(){
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

function remove_persons(ids) {
    log(__filename, "remove_persons", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.person_id = ids;

        HomePerson.remove_all(person).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/admin/person/persons', do_persons);
global.action.use_post('/admin/person/remove_persons', do_remove_persons);