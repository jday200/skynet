const querystring = require('node:querystring');
const T200Person = require('../modules/person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_register(req, res) {
    console.log('do_register');

    let form;

    req.on('data', function(data){
        form += data;
    });

    req.on('end', function(){
        let result = querystring.parse(form);

        if(result){
            let person = new T200Person();
            let HomePerson = new T200HomePerson();

            console.log(result);

            person.username = result.username;
            person.password = result.password1;
            
            let flag = HomePerson.register(person);
            console.log(flag);
            if(flag){
                console.log('done.');
                return true;
            }else{
                throw "error";
                return false;
            }
        }else{
            throw "error";
        }
    });
}

global.request.post['/register'] = do_register;

