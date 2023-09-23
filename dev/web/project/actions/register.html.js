const T200HttpRequest = require('../../library/net/T200HttpRequest.js');
const T200Person = require('../modules/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');


function do_register(req, res) {
    console.log("do_register");

    var person = new T200Person();
    let HomePerson = new T200HomePerson();

    console.log("register form");

    console.log(person);
    console.log(req.value('username'));

    debugger;
    person.username = req.value('username');
    person.password = req.value('password1');
  
    HomePerson.register(person, function(){
        console.log("register end");
    });

}

global.action.use_post('/register', do_register);