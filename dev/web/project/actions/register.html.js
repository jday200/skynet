const T200HttpsForm = require('../../library/net/T200HttpsForm.js');
const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_register(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = request.value('username');

        let pwd1 = request.value('password1');
        let pwd2 = request.value('password2');
        let email = request.value('email');

        debugger;
        if(T200HttpsForm.verify_equal(pwd1, pwd2)
            && T200HttpsForm.verify_text(person.username)
            && T200HttpsForm.verify_email(email)){

            person.password = pwd1;
            person.email = email;

            HomePerson.register(person).then(function(data){
                response.set('Content-Type', 'application/json');
                resolve(`{"result":"${data}"}`);
            }, function(err){
                reject(err);
            });

            }else{
                reject("do_register error");
            }
    });

    return promise;
}

global.action.use_post('/register', do_register);