const T200Error = require('../../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../../library/lib.js');

const T200HttpsForm = require('../../library/net/T200HttpsForm.js');
const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_register(request, response, cookie, session, resource) {
    log(__filename, "do_register");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        debugger;
        person.username = request.get('username');

        let pwd1 = request.get('password1');
        let pwd2 = request.get('password2');
        let email = request.get('email');

        if(T200HttpsForm.verify_equal(pwd1, pwd2)
            && T200HttpsForm.verify_text(person.username)
            && T200HttpsForm.verify_email(email)){

            person.password = pwd1;
            person.email = email;

            HomePerson.register(person).then(function(data){
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

global.action.use_post('/register', do_register);

