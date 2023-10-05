const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');


function do_login(request, response, cookie, session) {
    let self = this;
   
    let promise = new Promise(function(resolve, reject){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = request.value('username');
        person.password = request.value('password');

        return HomePerson.login(person).then(function(){
            session.set('name', person.username);
            cookie.set('name', person.username);

            console.log(response);

            //response.redirect('/');

            resolve();
        }, function(){
            reject();
        });
    });

    return promise;
}

global.action.use_post('/login', do_login);