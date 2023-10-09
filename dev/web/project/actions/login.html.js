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
                HomePerson.login(person).then(function(){
                    //
                    session.set('name', person.username);
                    cookie.set('name', person.username);

                    resolve();
                }, function(err){
                    reject(err);
                });
            }else{
                reject("do_login error");
            }
    });

    return promise;
}

global.action.use_post('/login', do_login);