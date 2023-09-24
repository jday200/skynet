const T200HttpRequest = require('../../library/net/T200HttpRequest.js');
const T200Person = require('../modules/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');


function do_register(req, res) {
    console.log("do_register");

    let pwd1 = req.value('password1');
    let pwd2 = req.value('password2');

    if(pwd1 === pwd2){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = req.value('username');
        person.password = pwd1;

        HomePerson.register(person, function(err){
            console.log("register end");
            if(err){
                return false;
            }
            return true;
        });
    
    }else{
        return false;
    }

}

global.action.use_post('/register', do_register);