const T200HttpForm = require('../../library/net/T200HttpForm.js');
const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');


function do_register(request, response, cookie, session) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = request.value('username');

        let pwd1 = request.value('password1');
        let pwd2 = request.value('password2');
        let email = request.value('email');

        if(T200HttpForm.verify_equal(pwd1, pwd2)){
            person.password = pwd1;

            if(T200HttpForm.verify_email(email)){
                person.email = email;

                HomePerson.register(person).then(function(){
                    resolve();
                }, function(){
                    reject();
                });
                return;
            }
        }
        reject();
    });

    return promise;
}

global.action.use_post('/register', do_register);