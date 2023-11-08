const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HttpsForm = require('../../library/net/T200HttpsForm.js');
const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_login(request, response, cookie, session, resource) {
    log(__filename, "do_login");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = request.get('username');
        person.password = request.get('password');

        if(T200HttpsForm.verify_text(person.username)
            && T200HttpsForm.verify_text(person.password)){

            HomePerson.login(person).then(function(data){
                set_data(cookie, session, data);

                response.type('json');
                response.data('success');
                resolve();
            }, function(err){
                response.type('json');
                response.data('failure');
                reject(err);
            }).catch(function(err){
                console.log(err);
            });

        }else{
            reject(T200Error.build(1));
        }
    });

    return promise;
}

function set_data(cookie, session, data) {
    let sid = session.build_sid(data);

    cookie.set('sid', sid);

    let result = {};

    result.userid = data[0].user_id;
    result.username = data[0].username;

    session.set(sid, result);
}

global.action.use_post('/login', do_login);

