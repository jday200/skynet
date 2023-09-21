const T200Person = require('../modules/person.js');
const T200HomePerson = require(‘../biz/T200HomePerson.js’);


function do_register(req, res) {
    console.log("do_register");

    let person = new T200Person();
    let HomePerson = new T200HomePerson();

    HomePerson.register(person, function(){

    });
}

//global.request.post['/register'] = do_register;
global.request.use_post('/register', do_register);