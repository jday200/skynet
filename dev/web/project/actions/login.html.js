const T200HttpRequest = require('../../library/net/T200HttpRequest.js');
const T200Person = require('../modules/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');


function do_login(req, res, callback) {
    console.log("do_login");

    if(1) {
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = req.value('username');
        person.password = req.value('password');

        HomePerson.login(person, function(err){
            console.log("login end");

            req.session.create();

            res.SET_HEADER('Location', '/index.html');
            if(callback)callback(err);
        });
    }
}

global.action.use_post('/login', do_login);