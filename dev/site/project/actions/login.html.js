const { log, log_start, log_stop } = require('../../library/lib.js');

const T200HttpsForm = require('../../library/net/T200HttpsForm.js');
const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_login(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = request.value('username');
        person.password = request.value('password');

        if(T200HttpsForm.verify_text(person.username)
            && T200HttpsForm.verify_text(person.password)){

            HomePerson.login(person).then(function(data){
                log(__filename, "do_login", JSON.stringify(data));

                set_data(cookie, session, data);

                response.type('json');
                response.data('success');
                resolve();
            }, function(err){
                response.type('json');
                response.data('failure');
                reject(err);
            });

        }else{
            reject("do_login error");
        }
    });

    return promise;
}

function set_data(cookie, session, data) {
    let sid = session.build_sid(data);

    cookie.set('sid', sid);

    let result = {};

    result.userid = data.userid;
    result.username = data.username;

    session.set(sid, result);
}

function clear_data(cookie, session, data) {
    let sid = cookie.get('sid');

    if(sid && 0 < sid){
        session.remove(sid);
        cookie.remove('sid');
    }
}



function do_logout(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        try{
            let user_id = session.get('userid');
        }catch(err){
            throw err;
        }

        if(0 < user_id){
            person.userid = user_id;

            HomePerson.logout(person).then(function(data){
                log(__filename, "do_logout", JSON.stringify(data));

                clear_data(cookie, session, data);

                response.type('json');
                response.data('success');
                resolve();
            }, function(err){
                response.type('json');
                response.data('failure');
                reject(err);
            });

        }else{
            reject("do_logout error");
        }

    });

    return promise;
}



global.action.use_post('/login', do_login);
global.action.use_post('/logout', do_logout);